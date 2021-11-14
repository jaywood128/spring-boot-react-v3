package com.johnathon.podcast_blast.payload.request;

import javax.validation.constraints.NotBlank;

public class LoginForm {
    @NotBlank
    private String username;

    @NotBlank
    private String password;

    public String getUserName() {
        return username;
    }

    public void setUserName(String userName) {
        this.username = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LoginForm (String username, String password){
        this.username = username;
        this.password = password;
    }
}
