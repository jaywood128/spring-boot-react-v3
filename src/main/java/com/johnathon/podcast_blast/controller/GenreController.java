//package com.johnathon.podcast_blast.controller;
//
//
//import com.johnathon.podcast_blast.model.Podcast;
////import com.johnathon.podcast_blast.repository.GenreRepository;
//import com.johnathon.podcast_blast.repository.EpisodeRepository;
//import com.johnathon.podcast_blast.repository.GenreRepository;
//import com.johnathon.podcast_blast.security.WebSecurityConfig;
//import net.minidev.json.JSONObject;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.client.RestTemplate;
//import org.springframework.web.reactive.function.client.WebClient;
//
//import java.util.*;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:3000/")
//@RequestMapping("/api")
//public class GenreController {
//
//
//    private GenreRepository genreRepository;
//
//    @Autowired
//    private WebSecurityConfig webSecurityConfig;
//
//    @Autowired
//    private RestTemplate restTemplate;
//    private Collection<Podcast> emptyPodcastCollection = new ArrayList<>();
//    private static final String baseURL = "https://listen-api.listennotes.com/api/v2";
//
//    @Autowired
//    private WebClient.Builder webClientBuilder;
//
//    public GenreController(GenreRepository genreRepository) {
//        super();
//        this.genreRepository = genreRepository;
//    }
//
//    @GetMapping("/genres")
//    public ResponseEntity<List<?>> getAllGenres(EpisodeRepository genreRepository){
//        List<JSONObject> returnedGenreIds = new ArrayList<>();
//
//        JSONObject jsonObjects = webClientBuilder
//                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
//                .defaultHeader("X-ListenAPI-Key", webSecurityConfig.getApiKey())
//                .build()
//                .get()
//                .uri(baseURL + "genres?top_level_only=0")
//                .retrieve()
//                .bodyToMono(JSONObject.class)
//                .block();
//        returnedGenreIds.add(jsonObjects);
//        if (returnedGenreIds.size() != 0){
//            Iterator<Map.Entry<String, Object>> it = jsonObjects.entrySet().iterator();
//
//            while(it.hasNext()) {
//                Map.Entry<String, Object> current = it.next();
//                System.out.println("GENRE KEY: " + current.getKey() + "GENRE VALUE:  " + current.getValue());
//            }
//        }
//
//        return (ResponseEntity<List<?>>) returnedGenreIds;
//
//
//    }
//
//}
