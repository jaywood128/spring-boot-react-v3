//package com.johnathon.podcast_blast.model;
//
//
//import javax.persistence.Column;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//
//import javax.persistence.*;
//
//
//@Entity
//@Table(name = "genre")
//
//public class Genre {
////
//    @Id
//    @Column(unique = true)
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private static Long id;
//
//    private static String name;
//
//    private static Long parentId;
//
//    public Genre(Long id, String name, Long parentId) {
//        this.id = id;
//        this.name = name;
//        this.parentId = parentId;
//    }
//
//    public static Long getId() {
//        return id;
//    }
//
//    public static void setId(Long id) {
//        Genre.id = id;
//    }
//
//    public static String getName() {
//        return name;
//    }
//
//    public static void setName(String name) {
//        Genre.name = name;
//    }
//
//    public static Long getParentId() {
//        return parentId;
//    }
//
//    public static void setParentId(Long parentId) {
//        Genre.parentId = parentId;
//    }
//}
//
