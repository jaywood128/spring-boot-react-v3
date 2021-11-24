/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import {
  SuggestedPodcastsContainerStyles,
  SuggestPocastImageContainer,
  // SuggestedPodcastStyles,
  SuggestedPodcastImageStyles,
  SuggestedPodcastPublisher,
  SuggestedPodcastTitle,
  SuggestedPodcastTitleContainer,
  SuggestedPodcastContainer,
  SuggestedPodcastLink,
} from "./SuggestedPodcastContainerStylings";

const SuggestedPodcastsContainer = (props) => (
  <SuggestedPodcastsContainerStyles>
    {props.podcasts.map((podcast) => {
      const encodedPodcastTitle = encodeURIComponent(podcast.title);
      return (
        <SuggestedPodcastContainer key={podcast.id}>
          {/* <SuggestedPodcastStyles> */}
          <SuggestedPodcastLink
            to={`/episodes/${encodedPodcastTitle}/${podcast.id}`}
          >
            <SuggestPocastImageContainer>
              <SuggestedPodcastImageStyles src={podcast.image} />
              <SuggestedPodcastTitleContainer>
                <SuggestedPodcastTitle>
                  {" "}
                  <h3>{podcast.publisher_original} </h3>{" "}
                </SuggestedPodcastTitle>
                <SuggestedPodcastPublisher>
                  <div>{podcast.title_original}</div>
                </SuggestedPodcastPublisher>
              </SuggestedPodcastTitleContainer>
            </SuggestPocastImageContainer>
          </SuggestedPodcastLink>
          {/* </SuggestedPodcastStyles> */}
        </SuggestedPodcastContainer>
      );
    })}
  </SuggestedPodcastsContainerStyles>
);

export default SuggestedPodcastsContainer;
