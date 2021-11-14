package com.johnathon.podcast_blast.repository;

import com.johnathon.podcast_blast.model.ERole;
import com.johnathon.podcast_blast.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
