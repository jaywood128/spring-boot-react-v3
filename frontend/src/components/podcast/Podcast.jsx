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
      if (podcastTitleCheck.title.length > 21) {
        return podcastTitleCheck.title
          .substring(0, 20)
          .replace(/<[^>]*>?/gm, "")
          .concat("...");
      }
      return podcastTitleCheck.title.replace(/<[^>]*>?/gm, "");
    }

    if (
      podcastTitleCheck.title_highlighted &&
      podcastTitleCheck.title_highlighted.length > 21
    ) {
      return podcastTitleCheck.title_highlighted
        .substring(0, 20)
        .replace(/<[^>]*>?/gm, "")
        .concat("...");
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
