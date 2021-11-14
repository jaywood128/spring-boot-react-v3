/* eslint-disable react/prefer-stateless-function */
/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import {
  TypeAheadContainerStyles,
  HorizontalLine,
} from "./TypeAheadContainerStyles";
import SuggestedTermsContainer from "./suggested-terms/SuggestedTermsContainer";
import SuggestedGeneresContainer from "./suggested-genres/SuggestedGenresContainer";
import SuggestedPodcastsContainer from "./suggested-podcasts/SuggestedPostcastsContainer";
import {
  BrowseByGenre,
  SuggestedPodcastsTitle,
} from "./suggested-genres/SuggestedGenresContainerStyles";

const TypeAheadContainer = (props) => (
  <TypeAheadContainerStyles>
    <SuggestedTermsContainer terms={props.typeAheadData[0].terms} />
    <HorizontalLine />
    <BrowseByGenre>BROWSE BY CATEGORY</BrowseByGenre>
    <SuggestedGeneresContainer genres={props.typeAheadData[0].genres} />
    <SuggestedPodcastsTitle>PODCASTS</SuggestedPodcastsTitle>
    <SuggestedPodcastsContainer podcasts={props.typeAheadData[0].podcasts} />
  </TypeAheadContainerStyles>
);

export default TypeAheadContainer;
