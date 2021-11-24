package com.johnathon.podcast_blast.controller;

import com.johnathon.podcast_blast.model.Episode;
import com.johnathon.podcast_blast.model.Podcast;
import com.johnathon.podcast_blast.model.User;
import com.johnathon.podcast_blast.repository.EpisodeRepository;
import com.johnathon.podcast_blast.repository.PodcastRepository;
import com.johnathon.podcast_blast.repository.UserRepository;
import com.johnathon.podcast_blast.security.WebSecurityConfig;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.*;

@RestController
@RequestMapping("/api")
public class EpisodeController {
    private EpisodeRepository episodeRepository;
    private UserRepository userRepository;
    @Autowired
    private PodcastRepository podcastRepository;
    private WebSecurityConfig webSecurityConfig;
    @Autowired
    private WebClient.Builder webClientBuilder;
    private static final String baseURL = "https://listen-api-test.listennotes.com/api/v2";

    public EpisodeController(EpisodeRepository episodeRepository, UserRepository userRepository,
            PodcastRepository podcastRepository) {
        super();
        this.episodeRepository = episodeRepository;
        this.userRepository = userRepository;
        this.podcastRepository = podcastRepository;
    }

    @PostMapping("/{id}/episodes/{episodeApiId}/{podcastApiId}")
    public ResponseEntity<?> addEpisode(@PathVariable("id") String id, @PathVariable String episodeApiId,
            @PathVariable String podcastApiId) {
        Optional<User> user = userRepository.findById(Long.valueOf(id));

        Optional<Episode> episodeCheck = episodeRepository.findByApiId(episodeApiId);
        Optional<Podcast> podcastCheck = podcastRepository.findByApiId(podcastApiId);
        if (user.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        if (episodeCheck.isPresent() && user.get().getEpisodes().contains(episodeCheck.get())) {
            return new ResponseEntity<Error>(HttpStatus.NOT_FOUND);
        }
        if (podcastCheck.isEmpty()) {
            // Adding a new episode to a new podcast.
            Podcast newPodcast = new Podcast(podcastApiId);
            podcastRepository.save(newPodcast);
            Episode newEpisode = new Episode(episodeApiId, newPodcast);
            user.get().addEpisode(newEpisode);
            newEpisode.setUser(user.get());
            newPodcast.setEpisodes(newEpisode);
            userRepository.save(user.get());
            return new ResponseEntity<String>(HttpStatus.OK);
        }
        if (episodeCheck.isEmpty()) {
            // Adding an episode to an existing podcast.
            Episode newEpisode = new Episode(episodeApiId, podcastCheck.get());
            user.get().addEpisode(newEpisode);
            newEpisode.setUser(user.get());
            podcastCheck.get().setEpisodes(newEpisode);
            userRepository.save(user.get());
            episodeRepository.save(newEpisode);
            return new ResponseEntity<String>(HttpStatus.OK);
        }
        return new ResponseEntity<Error>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{id}/episodes/{episodeApiId}", produces = "application/json")
    public ResponseEntity<?> getEpisode(@PathVariable("id") String id, @PathVariable String episodeApiId) {
        Optional<User> userCheck = userRepository.findById(Long.valueOf(id));
        Optional<Episode> episodeCheck = episodeRepository.findByApiId(episodeApiId);
        if (userCheck.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        JSONObject jsonObject = webClientBuilder
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader("X-ListenAPI-Key", webSecurityConfig.getApiKey()).build().get()
                .uri(baseURL + "/episodes/" + episodeApiId + "?sort=recent_first").retrieve()
                .bodyToMono(JSONObject.class).block();
        if (jsonObject != null) {
            return new ResponseEntity<>(jsonObject, HttpStatus.OK);
        }
        return new ResponseEntity<Error>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/{id}/episodes", produces = "application/json")
    public ResponseEntity<List<JSONObject>> getEpisodes(@PathVariable("id") Integer id) {
        Optional<User> foundUser = userRepository.findById(Long.valueOf(id));
        System.out.println("User id is: " + id);
        List<JSONObject> returnedEpisodes = new ArrayList<>();
        if (foundUser.isEmpty()) {
            List<JSONObject> noEntities = new ArrayList<>();
            return new ResponseEntity<>(noEntities, HttpStatus.UNAUTHORIZED);
        } else {
            User user = foundUser.get();
            Set<Episode> usersEpisodes = user.getEpisodes();
            Set<String> episodeIdArrayList = new HashSet<>();
            for (Episode e : usersEpisodes) {
                episodeIdArrayList.add(e.getApiId());
            }
            for (String aid : episodeIdArrayList) {
                System.out.println("api id: " + aid);
                JSONObject jsonObject = webClientBuilder
                        .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .defaultHeader("X-ListenAPI-Key", webSecurityConfig.getApiKey()).build().get()
                        .uri(baseURL + "/episodes/" + aid + "?sort=recent_first").retrieve()
                        .bodyToMono(JSONObject.class).block();
                if (jsonObject != null) {
                    returnedEpisodes.add(jsonObject);
                }
            }
        }
        return new ResponseEntity<>(returnedEpisodes, HttpStatus.OK);

    }

    @DeleteMapping("/{id}/episodes/{episodeApiId}/{podcastApiId}")
    public HttpStatus deleteEpisode(@PathVariable("id") String id, @PathVariable("episodeApiId") String episodeApiId,
            @PathVariable("podcastApiId") String podcastApiId) {
        Optional<User> foundUser = userRepository.findById(Long.valueOf(id));
        Optional<Episode> checkEpisode = episodeRepository.findByApiId(episodeApiId);
        Optional<Podcast> checkPodcast = podcastRepository.findByApiId(podcastApiId);
        if (foundUser.isEmpty() || checkPodcast.isEmpty()) {
            return HttpStatus.UNAUTHORIZED;
        }
        if (checkEpisode.isPresent() && foundUser.get().getEpisodes().contains(checkEpisode.get())
                && checkPodcast.get().getEpisodes().contains(checkEpisode.get())) {
            foundUser.get().removeEpisode(checkEpisode.get());
            checkPodcast.get().getEpisodes().remove(checkEpisode.get());
            episodeRepository.delete(checkEpisode.get());
            return HttpStatus.OK;
        }
        return HttpStatus.NOT_FOUND;
    }
}
