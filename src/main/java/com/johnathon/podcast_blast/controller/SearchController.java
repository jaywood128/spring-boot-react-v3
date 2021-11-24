package com.johnathon.podcast_blast.controller;

import com.johnathon.podcast_blast.payload.search.SearchForm;
import com.johnathon.podcast_blast.security.WebSecurityConfig;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import javax.validation.Valid;
import java.io.Serializable;

@RestController
@RequestMapping("/api")
public class SearchController {
    // prod --> https://listen-api.listennotes.com/api/v2
    // test -> https://listen-api-test.listennotes.com/api/v2
    private static final String baseURL = "https://listen-api-test.listennotes.com/api/v2";
    @Autowired
    private WebClient.Builder webClientBuilder;
    @Autowired
    private WebSecurityConfig webSecurityConfig;

    public SearchController() {
    }

    @PostMapping("/full-text-search")
    private ResponseEntity<? extends Serializable> fullTextSearch(@Valid @RequestBody SearchForm searchForm) {
        System.out.println("Search term " + searchForm.textInput);
        JSONObject jsonObject = webClientBuilder
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader("X-ListenAPI-Key", webSecurityConfig.getApiKey()).build().get()
                .uri(baseURL
                        + "/search?sort_by_date=1&type=episode&offset=0&len_min=10&len_max=200&published_before=1580172454000&published_after=0&only_in=title,description,author,audio&language=English&q="
                        + searchForm.getTextInput())
                .retrieve().bodyToMono(JSONObject.class).block();
        if (jsonObject != null) {
            return new ResponseEntity<>(jsonObject, HttpStatus.OK);
        }
        return new ResponseEntity<Error>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/get-genres")
    private ResponseEntity<? extends Serializable> getGenres() {
        JSONObject jsonObject = webClientBuilder
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader("X-ListenAPI-Key", webSecurityConfig.getApiKey()).build().get()
                .uri(baseURL + "/genres?top_level_only=1").retrieve().bodyToMono(JSONObject.class).block();
        if (jsonObject != null) {
            return new ResponseEntity<>(jsonObject, HttpStatus.OK);
        }
        return new ResponseEntity<Error>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/type-ahead-search")
    private ResponseEntity<? extends Serializable> typeAheadSearch(@Valid @RequestBody SearchForm searchAheadForm) {
        System.out.println("Search ahead for " + searchAheadForm.getTextInput());
        JSONObject jsonObject = webClientBuilder
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader("X-ListenAPI-Key", webSecurityConfig.getApiKey()).build().get()
                .uri(baseURL + "/typeahead?q=" + searchAheadForm.getTextInput()
                        + "&show_podcasts=1&show_genres=1&safe_mode=0")
                .retrieve().bodyToMono(JSONObject.class).block();
        if (jsonObject != null) {
            return new ResponseEntity<>(jsonObject, HttpStatus.OK);
        }
        return new ResponseEntity<Error>(HttpStatus.NOT_FOUND);

    }

    @GetMapping("/best-podcasts-by-genre/{genre-id}")
    private ResponseEntity<? extends Serializable> getBestPodcastsByGenre(@PathVariable("genre-id") String genreid) {
        JSONObject jsonObject = webClientBuilder
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader("X-ListenAPI-Key", webSecurityConfig.getApiKey()).build().get()
                .uri(baseURL + "/best_podcasts?genre_id=" + genreid + "&page=<integer>&region=us&safe_mode=0")
                .retrieve().bodyToMono(JSONObject.class).block();
        if (jsonObject != null) {
            return new ResponseEntity<>(jsonObject, HttpStatus.OK);
        }
        return new ResponseEntity<Error>(HttpStatus.NOT_FOUND);
    }

}
