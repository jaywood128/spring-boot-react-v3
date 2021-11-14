package com.johnathon.podcast_blast.repository;

import com.johnathon.podcast_blast.model.Podcast;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PodcastRepository extends JpaRepository<Podcast, Long> {
    Optional<Podcast> findByApiId(String apiId);
    void delete(Podcast podcast);
}