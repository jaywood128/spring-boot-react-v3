package com.johnathon.podcast_blast.controller;

import com.johnathon.podcast_blast.model.Podcast;
import com.johnathon.podcast_blast.model.User;
import com.johnathon.podcast_blast.repository.PodcastRepository;
import com.johnathon.podcast_blast.repository.UserRepository;
import com.johnathon.podcast_blast.security.WebSecurityConfig;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.ListableBeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

import org.springframework.web.reactive.function.client.WebClient;


@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api")
public class PodcastController {

    private PodcastRepository podcastRepository;
    private UserRepository userRepository;

    @Autowired
    private WebSecurityConfig webSecurityConfig;

    @Autowired
    private RestTemplate restTemplate;
    private Collection<Podcast> emptyPodcastCollection = new ArrayList<>();
    //prod --> https://listen-api.listennotes.com/api/v2
    // test -> https://listen-api-test.listennotes.com/api/v2
    private static final String baseURL = "https://listen-api.listennotes.com/api/v2";

    @Autowired
    private WebClient.Builder webClientBuilder;

    public PodcastController(PodcastRepository podcastRepository, UserRepository userRepository) {
        super();
        this.podcastRepository = podcastRepository;
        this.userRepository = userRepository;
    }

    // Read a user's podcasts
    @GetMapping(value = "/{id}/podcasts", produces = "application/json")
    public ResponseEntity<List<JSONObject>> getPodcasts(@PathVariable("id") Integer userId) {
        Optional<User> foundUser = userRepository.findById(Long.valueOf(userId));
        List<JSONObject> returnedPodcasts = new ArrayList<>();
        if (foundUser.isEmpty()) {
            List<JSONObject> noEntities = new ArrayList<>();
            return new ResponseEntity<>(noEntities, HttpStatus.NOT_FOUND);
        } else {
            User user = foundUser.get();
            Collection<Podcast> usersPodcasts = user.getPodcasts();
            List<String> podcastIdArrayList = new ArrayList<>();
            if (usersPodcasts != null) {
                for (Podcast podcast : usersPodcasts) {
                    String apiId = podcast.getApiId();
                    podcastIdArrayList.add(apiId);
                    System.out.println("Podcast id arraylist size is: " + podcastIdArrayList.size());
                }
                for (String aid : podcastIdArrayList) {
                    System.out.println("api id: " + aid);

                    JSONObject jsonObjects = webClientBuilder
                            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                            .defaultHeader("X-ListenAPI-Key", webSecurityConfig.getApiKey())
                            .build()
                            .get()
                            .uri(baseURL + "/podcasts/" + aid + "?sort=recent_first")
                            .retrieve()
                            .bodyToMono(JSONObject.class)
                            .block();
                    returnedPodcasts.add(jsonObjects);
                        assert jsonObjects != null;
                        Iterator<Map.Entry<String, Object>> it = jsonObjects.entrySet().iterator();
                        while(it.hasNext()) {
                            Map.Entry<String, Object> current = it.next();
                            System.out.println("KEY: " + current.getKey() + "VALUE:  " + current.getValue());
                            if (current.getKey().equalsIgnoreCase("episodes")) {
                                it.remove();
                            }
                        }
                }
            }
        }
        return new ResponseEntity<>(returnedPodcasts, HttpStatus.OK);
    }
    //Check if a user is following a certain podcast
    //params: user id, podcast api id
    // return : boolean
    @GetMapping(value = "/{id}/podcasts/{podcastApiId}/isFollowing", produces = "application/json")
    boolean isUserFollowingPodcast(@PathVariable String id, @PathVariable("podcastApiId") String podcastApiId) {
        Optional<User> userCheck = userRepository.findById(Long.valueOf(id));
        Optional<Podcast> podcastCheck = podcastRepository.findByApiId(podcastApiId);
        if(userCheck.isEmpty() || podcastCheck.isEmpty()) return false;
        if(!userCheck.get().getPodcasts().contains(podcastCheck.get())){
            return false;
        }
        return true;
    }

    // Read a podcast's episodes
//    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_MODERATOR') or hasRole('ROLE_ADMIN')")
    @GetMapping(value = "/{id}/podcasts/{podcastApiId}", produces = "application/json")
    ResponseEntity<List<JSONObject>> getPodcastsEpisodes(@PathVariable String id, @PathVariable("podcastApiId") String podcastApiId) {
        Optional<User> userCheck = userRepository.findById(Long.valueOf(id));
        Optional<Podcast> podcastCheck = podcastRepository.findByApiId(podcastApiId);
        List<JSONObject> returnedPodcastEpisodes = new ArrayList<>();
        List<JSONObject> podcastsEpisodes = new ArrayList<>();
        if (userCheck.isEmpty()) {
            List<JSONObject> noEntities = new ArrayList<>();
            return new ResponseEntity<>(noEntities, HttpStatus.NOT_FOUND);
        } else {
            if (podcastCheck.isPresent() && !podcastCheck.get().getEpisodes().isEmpty()) {
                Podcast podcast = podcastCheck.get();
                Set<String> epApiIds = new HashSet<>();

                JSONObject jsonObjects = webClientBuilder
                        .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .defaultHeader("X-ListenAPI-Key", webSecurityConfig.getApiKey())
                        .build()
                        .get()
                        .uri(baseURL + "/podcasts/" + podcastApiId + "?sort=recent_first")
                        .retrieve()
                        .bodyToMono(JSONObject.class)
                        .block();
                assert jsonObjects != null;
                Iterator<Map.Entry<String, Object>> it = jsonObjects.entrySet().iterator();
                while(it.hasNext()) {
                    Map.Entry<String, Object> current = it.next();
                    System.out.println("EPISODE KEY: " + current.getKey() + "EPISODE VALUE:  " + current.getValue());
                    if (!current.getKey().equalsIgnoreCase("episodes")) {
                        it.remove();
                    }
                }
                returnedPodcastEpisodes.add(jsonObjects);
            }
        }
        return new ResponseEntity<>(returnedPodcastEpisodes, HttpStatus.OK);
    }

    // Add a podcast to user's podcasts
    @PostMapping(value = "/{id}/podcasts/{apiId}", produces = "application/json", consumes = "application/json")
    public HttpStatus addPodcast(@PathVariable String id, @PathVariable String apiId) {
        Optional<User> user = userRepository.findById(Long.valueOf(id));
        Optional<Podcast> podcastCheck = podcastRepository.findByApiId(apiId);
        Podcast newPodcast = new Podcast(apiId);
        if (user.isPresent() && podcastCheck.isEmpty() && !user.get().getPodcasts().contains(newPodcast)) {
            newPodcast.setUser(user.get());
            podcastRepository.save(newPodcast);
            user.get().addPodcast(newPodcast);
            userRepository.save(user.get());
            return HttpStatus.CREATED;
        }
        return HttpStatus.NOT_FOUND;
    }

    @DeleteMapping("/{id}/podcasts/{apiId}")
    public HttpStatus deletePodcast(@PathVariable("id") String id, @PathVariable("apiId") String apiId) {
        Optional<User> currentUser = userRepository.findById(Long.parseLong(id));
        Optional<Podcast> podcastToDelete = podcastRepository.findByApiId(apiId);
        if (currentUser.isEmpty() || podcastToDelete.isEmpty()) {
            return HttpStatus.NOT_FOUND;
        }
        if (currentUser.get().removePodcast(podcastToDelete.get()) && podcastToDelete.get().removeUser(currentUser.get())) {
            currentUser.get().removePodcast(podcastToDelete.get());
            podcastToDelete.get().removeUser(currentUser.get());
            podcastRepository.delete(podcastToDelete.get());
            return HttpStatus.OK;
        }
        return HttpStatus.NOT_FOUND;
    }

    @GetMapping("/curated_podcasts")
    public ResponseEntity<List<JSONObject>> curratedPodcasts(){
        List<JSONObject> curratedPodcasts = new ArrayList<>();

        JSONObject jsonObjects = webClientBuilder
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader("X-ListenAPI-Key", webSecurityConfig.getApiKey())
                .build()
                .get()
                .uri(baseURL + "/curated_podcasts?page=1")
                .retrieve()
                .bodyToMono(JSONObject.class)
                .block();
        assert jsonObjects != null;
        curratedPodcasts.add(jsonObjects);

        return new ResponseEntity<>(curratedPodcasts, HttpStatus.OK);
    }

    @GetMapping(value = "/podcasts/{podcastApiId}", produces = "application/json")
    ResponseEntity<List<JSONObject>> getPodcastsEpisodesWithoutUserId(@PathVariable("podcastApiId") String podcastApiId) {

        List<JSONObject> returnedPodcastEpisodes = new ArrayList<>();
        List<JSONObject> podcastsEpisodes = new ArrayList<>();

                JSONObject jsonObjects = webClientBuilder
                        .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .defaultHeader("X-ListenAPI-Key", webSecurityConfig.getApiKey())
                        .build()
                        .get()
                        .uri(baseURL + "/podcasts/" + podcastApiId + "?sort=recent_first")
                        .retrieve()
                        .bodyToMono(JSONObject.class)
                        .block();
                assert jsonObjects != null;
                Iterator<Map.Entry<String, Object>> it = jsonObjects.entrySet().iterator();
                while(it.hasNext()) {
                    Map.Entry<String, Object> current = it.next();
                    System.out.println("EPISODE KEY: " + current.getKey() + "EPISODE VALUE:  " + current.getValue());
                    if (!current.getKey().equalsIgnoreCase("episodes")) {
                        it.remove();
                    }
                }
                returnedPodcastEpisodes.add(jsonObjects);
        return new ResponseEntity<>(returnedPodcastEpisodes, HttpStatus.OK);
    }


}
