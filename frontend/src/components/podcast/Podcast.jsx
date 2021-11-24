import React from "react";

import {
  PodcastStylesLinkContainer,
  PodcastContainer,
  TitleContainer,
  ImageContainer,
  StyledImage,
  CardTop,
  StyledTitle,
} from "./PodcastStyles";

const Podcast = ({ podcast }) => {
  const encodedPodcastTitle = encodeURIComponent(podcast.title);

  const renderTitle = (podcastTitleCheck) => {
    if (podcastTitleCheck.title) {
      return podcast.title.replace(/<[^>]*>?/gm, "");
    }
    return podcastTitleCheck.title_highlighted.replace(/<[^>]*>?/gm, "");
  };

  return (
    <PodcastContainer>
      <PodcastStylesLinkContainer
        key={podcast.id}
        to={`/episodes/${encodedPodcastTitle}/${podcast.id}`}
      >
        <CardTop>
          <ImageContainer>
            <StyledImage src={podcast.image} />
          </ImageContainer>
        </CardTop>
        <TitleContainer>
          <StyledTitle>{renderTitle(podcast)}</StyledTitle>
        </TitleContainer>
      </PodcastStylesLinkContainer>
    </PodcastContainer>
  );
};

export default Podcast;
