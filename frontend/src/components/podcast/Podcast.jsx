import React from "react";

import {
  PodcastStylesContainer,
  TitleContainer,
  ImageContainer,
  StyledImage,
  CardTop,
  StyledTitle,
} from "./PodcastStyles";

const PodcastContainer = ({ podcast }) => {
  const encodedPodcastTitle = encodeURIComponent(podcast.title);

  return (
    <PodcastStylesContainer
      key={podcast.id}
      to={`/episodes/${encodedPodcastTitle}/${podcast.id}`}
    >
      <CardTop>
        <ImageContainer>
          <StyledImage src={podcast.image} />
        </ImageContainer>
      </CardTop>
      <TitleContainer>
        <StyledTitle>{podcast.title}</StyledTitle>
      </TitleContainer>
    </PodcastStylesContainer>
  );
};

export default PodcastContainer;
