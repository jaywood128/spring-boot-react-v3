import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlayCircle } from "react-icons/fa";
import episodeData from "../../data/episodes-data";
import Podcast from "../../components/podcast/Podcast";
import ViewContainerStylings from "../application/ApplicationContainerStyling";
import {
  PodcastLibraryContainer,
  LibraryPodcastsTitle,
  LibraryPodcastsContainer,
  AddPodcastsLinkContainer,
  AddPodcastsLink,
  TopLevelAddPodcastsContainer,
} from "./LibraryContainerStylings";
import {
  SearchResultsEpisodesTitle,
  EpisodesSearchResultContainer,
} from "../search-results/SearchResultsContainerStyles";
import {
  EpisodeContainer,
  EpisodeImageContainer,
  EpisodeImage,
  EpisodeTitle,
  EpisodeTitleContainer,
  EpisodeDescriptionContainer,
  EpisodeStyledPlayLink,
  EpisodeAudioLinkContainer,
} from "../../components/episode/EpisodeStylings";
import { HorizontalLine } from "../../components/search/type-ahead/TypeAheadContainerStyles";
import { EpisodeRowContainer } from "../RecentEpisodes/RecentEpisodesStyleContainer";

const LibraryContainer = () => {
  const [podcasts, setPodcasts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [episodes, setEpisodes] = useState([]);
  const BACKEND_PODCASTS = "http://127.0.0.1:8080/api";

  const getUsersPodcasts = () => {
    axios
      .get(`${BACKEND_PODCASTS}/${localStorage.getItem("id")}/podcasts`)
      .then((response) => {
        const podcastResponse = response.data;
        // eslint-disable-next-line no-console
        console.log(`Response episode data ${JSON.stringify(podcastResponse)}`);
        setPodcasts(podcastResponse);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(`Error: ${error}`));
  };
  const getUsersEpisodes = () => {
    axios
      .get(`${BACKEND_PODCASTS}/${localStorage.getItem("id")}/episodes`)
      .then((response) => {
        const episodesResponse = response.data;
        // eslint-disable-next-line no-console
        console.log(
          `Response podcast data ${JSON.stringify(episodesResponse)}`
        );
        setEpisodes(episodesResponse);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getUsersPodcasts();
    getUsersEpisodes();
  }, []);

  return (
    <ViewContainerStylings>
      {podcasts.length !== 0 ? (
        <LibraryPodcastsContainer>
          <LibraryPodcastsTitle>Podcasts</LibraryPodcastsTitle>
          {podcasts.map((podcast) => (
            <PodcastLibraryContainer key={podcast.id}>
              <Podcast podcast={podcast} />
            </PodcastLibraryContainer>
          ))}
        </LibraryPodcastsContainer>
      ) : (
        <TopLevelAddPodcastsContainer>
          <AddPodcastsLinkContainer>
            <AddPodcastsLink to="/all-genres">Add podcasts...</AddPodcastsLink>
          </AddPodcastsLinkContainer>
        </TopLevelAddPodcastsContainer>
      )}
      {episodeData.length !== 0 ? (
        <div>
          <SearchResultsEpisodesTitle>Episodes </SearchResultsEpisodesTitle>
          <EpisodesSearchResultContainer>
            {episodeData[0].episodes.map((episode) => (
              <EpisodeContainer key={episode.id}>
                <EpisodeRowContainer>
                  <EpisodeImageContainer>
                    <EpisodeImage alt="not availible" src={episode.image} />
                  </EpisodeImageContainer>

                  <EpisodeTitleContainer>
                    <EpisodeTitle> {episode.title_original}</EpisodeTitle>
                    <EpisodeDescriptionContainer>
                      <p>
                        {episode.description.length > 255
                          ? `${episode.description
                              .substring(0, 255)
                              .replace(/<[^>]*>?/gm, "")}...`
                          : episode.description}
                      </p>
                      <EpisodeAudioLinkContainer>
                        <EpisodeStyledPlayLink
                          href={episode.audio}
                          target="_blank"
                        >
                          <FaPlayCircle size={30} />
                        </EpisodeStyledPlayLink>{" "}
                      </EpisodeAudioLinkContainer>
                    </EpisodeDescriptionContainer>
                  </EpisodeTitleContainer>
                </EpisodeRowContainer>
                <HorizontalLine />
              </EpisodeContainer>
            ))}
          </EpisodesSearchResultContainer>
        </div>
      ) : (
        <div> No episodes</div>
      )}
    </ViewContainerStylings>
  );
};

export default LibraryContainer;
