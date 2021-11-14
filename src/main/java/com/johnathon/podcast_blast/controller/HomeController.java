package com.johnathon.podcast_blast.controller;

import com.johnathon.podcast_blast.SpringBootDemoApplication;
import com.johnathon.podcast_blast.repository.UserRepository;
import com.johnathon.podcast_blast.security.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class HomeController {
    private UserRepository userRepository;

    public HomeController(){

    }


    @RequestMapping("/logout-succes")
    public String logoutPage() {
        return "login.jsp";
    }
}
