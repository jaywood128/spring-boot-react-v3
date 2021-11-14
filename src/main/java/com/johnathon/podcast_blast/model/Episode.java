package com.johnathon.podcast_blast.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "episode")


public class Episode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String apiId;

    public String getApiId() {
        return apiId;
    }

    @ManyToOne
    // @JoinColumn annotation defines the actual physical mapping on the owning side //
    @JoinColumn(name="podcast_id")
    private Podcast podcast;

    @ManyToMany(mappedBy = "episodes")
    private Set<User> users = new HashSet<>();

    public Episode(String apiId, Podcast podcast) {
        this.apiId = apiId;
        if(podcast != null){
            this.setPodcast(podcast);
        }
    }

    public Episode(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        if(id != null){
            this.id = id;
        }
    }

    public Podcast getPodcast() {
        return podcast;
    }

    public void setPodcast(Podcast podcast) {
        if(podcast != null && this.podcast == null){
            this.podcast = podcast;
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Episode episode = (Episode) o;
        return id.equals(episode.id) &&
                apiId.equals(episode.apiId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, apiId);
    }

    public Set<User> getUser() {
        return users;
    }

    public boolean setUser(User user) {
        if(!this.users.contains((user)) && user != null){
            this.users.add(user);
            return true;
        }
        return false;
    }
    public boolean removeUser(User user){
        if ((user != null) && (!this.users.contains(user))) {
            this.users.remove(user);
            user.removeEpisode(this);
            return true;
        }
        return false;
    }
}

