package com.johnathon.podcast_blast.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.johnathon.podcast_blast.model.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    Optional<User> findById(Long id);

    boolean existsByEmail(String email);

    boolean existsByUsername(String username);
}