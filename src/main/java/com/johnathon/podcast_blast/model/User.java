package com.johnathon.podcast_blast.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import lombok.*;

import java.util.*;

//@NoArgsConstructor
@Entity
@Table(name = "user")

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Name is required")
    private String name;

    @NotEmpty(message="Username must be provided")
    private String username;

    @NotEmpty(message = "Email is required")
    private String email;

    @NotEmpty(message = "password is required")
    private String password;

    @ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
    @JoinTable(
            name = "user_podcast",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "podcast_id")}
    )
    private Set<Podcast> podcasts = new HashSet<>();


    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "user_episode",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "episode_id")}
    )
    private Set<Episode> episodes = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "user_role",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id")}
    )
    private Set<Role> roles = new HashSet<>();

    public User(String name, String username, String email, String password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    public User(){

    }

    public String getUserName() {
        return username;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public Set<Episode> getEpisodes() {
        return episodes;
    }

    public Set<Podcast> getPodcasts() {
        return podcasts;
    }

    public boolean addPodcast(Podcast podcast) {
        if ((podcast.getId() != null)) {
            this.podcasts.add(podcast);
            System.out.println("Podcast with id " + podcast.getId() + "was added to " + this.getName() + " collection");
            return true;
        }
        return false;
    }

    public boolean removePodcast(Podcast podcast) {
        if ((podcast != null) && (this.podcasts.contains(podcast))) {
            this.podcasts.remove(podcast);
            System.out.print(podcast.getApiId() + " has been removed for " + this.username);
            return true;
        }
        return false;
    }

    public boolean addEpisode(Episode episode) {
        if ((episode != null) && (!this.episodes.contains(episode))) {
            this.episodes.add(episode);
            return true;
        }
        return false;
    }

    public boolean removeEpisode(Episode episode){
        if ((episode != null) && (this.episodes.contains(episode))) {
            this.episodes.remove(episode);
            episode.removeUser(this);
            return true;
        }
        return false;
    }

    public void setRoles(Set<Role> roles){
        this.roles = (roles);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id.equals(user.id) &&
                name.equals(user.name) &&
                username.equals(user.username) &&
                email.equals(user.email) &&
                password.equals(user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, username, email, password);
    }

    public String getUsername() {
        return username;
    }

    public Set<Role> getRoles() {
        return roles;
    }
}

