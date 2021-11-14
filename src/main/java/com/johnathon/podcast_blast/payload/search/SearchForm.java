package com.johnathon.podcast_blast.payload.search;

import javax.validation.constraints.NotBlank;

public class SearchForm {
//    @NotBlank
    public String textInput;

    public String getTextInput() {
        return textInput;
    }

    public void setTextInput(String textInput) {
        this.textInput = textInput;
    }
}
