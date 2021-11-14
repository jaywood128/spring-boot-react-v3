/* eslint-disable react/destructuring-assignment */
import React from "react";
import {
  SuggestedGenresContainerStyles,
  SuggestedGenreLink,
  SuggestedGenreStylings,
  // eslint-disable-next-line no-unused-vars
  BrowseByGenre,
} from "./SuggestedGenresContainerStyles";

const SuggestedGenres = (props) => (
  <SuggestedGenresContainerStyles>
    {props.genres.map((genre) => (
      <SuggestedGenreStylings key={genre.id}>
        {" "}
        <SuggestedGenreLink>{genre.name}</SuggestedGenreLink>{" "}
      </SuggestedGenreStylings>
    ))}
  </SuggestedGenresContainerStyles>
);

export default SuggestedGenres;
