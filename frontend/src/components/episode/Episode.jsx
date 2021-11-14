/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import {
  EpisodeContainer,
  EpisodeTitleContainer,
  EpisodeImage,
  EpisodeTitle,
  EpisodeDescriptionContainer,
  EpisodeAudioLinkContainer,
  EpisodeStyledPlayLink,
} from "./EpisodeStylings";
// import { TitleContainer, ImageContainer } from "../podcast/PodcastStyles";

const Episode = (episode) => {
  return (
    <EpisodeContainer id={episode.id}>
      <EpisodeImage alt="not availible" src={episode.image} />
      <EpisodeTitleContainer>
        <EpisodeTitle> Episode Title</EpisodeTitle>
        <EpisodeDescriptionContainer>
          <p
            style={{
              lineHeight: "30px",
              font: "#404040",
            }}
          >
            {episode.description_highlighted.length > 100
              ? `${episode.description_original
                  .substring(0, 100)
                  .replace(/<[^>]*>?/gm, "")}...`
              : episode.description_highlighted}
          </p>
          <p>Description</p>
          <EpisodeAudioLinkContainer>
            <EpisodeStyledPlayLink href={episode.audio} target="_blank">
              <FaPlayCircle size={30} />
            </EpisodeStyledPlayLink>{" "}
          </EpisodeAudioLinkContainer>
        </EpisodeDescriptionContainer>
      </EpisodeTitleContainer>
    </EpisodeContainer>
  );
};

export default Episode;
