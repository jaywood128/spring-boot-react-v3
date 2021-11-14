/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";
// FaCheckCircle
// import UserService from "../../services/user.service";
import ViewContainerStylings from "../application/ApplicationContainerStyling";
import {
  RecentEpisodesStyleContainer,
  EpisodeRowContainer,
  EpisodesHeaderContainer,
  EpisodesHeaderStylings,
  HeaderImageContainer,
  FollowingContainer,
  AddPodcastButtonContainer,
  FollowPodcastStylings,
  UnFollowPodcastStylings,
} from "./RecentEpisodesStyleContainer";
import {
  EpisodeContainer,
  EpisodeAudioLinkContainer,
  EpisodeDescriptionContainer,
  EpisodeImage,
  EpisodeTitle,
  EpisodeStyledPlayLink,
  EpisodeTitleContainer,
} from "../../components/episode/EpisodeStylings";
import { StyledImage } from "../../components/podcast/PodcastStyles";

const RecentEpisodesContainer = () => {
  const { id } = useParams();
  const { podcastTitle } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [podcastImage, setPodcastImage] = useState([]);
  const BACKEND_PODCASTS = "http://127.0.0.1:8080/api";
  // eslint-disable-next-line no-unused-vars
  const [isFollowingPodcast, setIsFollowingPodcast] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleFollow = () => {
    const bearer = `Bearer${localStorage.getItem("token")}`;
    const settings = {
      method: "POST",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    };
    axios
      .post(
        `${BACKEND_PODCASTS}/${localStorage.getItem("id")}/podcasts/${id}`,
        settings
      )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(`Response after POST add podcast ${response.data}`);
        if (response.data === "CREATED") {
          setIsFollowingPodcast(true);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const handleUnFollow = () => {
    const bearer = `Bearer${localStorage.getItem("token")}`;
    const unFollowSettings = {
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    };

    axios
      .delete(
        `${BACKEND_PODCASTS}/${localStorage.getItem("id")}/podcasts/${id}`,
        unFollowSettings
      )
      .then((response) => {
        setIsFollowingPodcast(false);
        // eslint-disable-next-line no-console
        console.log(`UnFollowed/delete podcast from library? ${response.data}`);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const getIsFollowingPodcast = () => {
    const bearer = `Bearer${localStorage.getItem("token")}`;
    const settings = {
      method: "GET",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    };
    axios
      .get(
        `${BACKEND_PODCASTS}/${localStorage.getItem(
          "id"
        )}/podcasts/${id}/isFollowing`,
        settings
      )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(
          `Are we following? GET isFollowingPodcast ${response.data}`
        );
        if (response.data) {
          setIsFollowingPodcast(true);
        } else {
          setIsFollowingPodcast(false);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const getEpisodes = () => {
    const bearer = `Bearer${localStorage.getItem("token")}`;
    const settings = {
      method: "GET",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    };

    axios
      .get(`${BACKEND_PODCASTS}/podcasts/${id}`, settings)
      .then((response) => {
        const episodesResponse = response.data[0].episodes;
        setEpisodes(episodesResponse);
        setPodcastImage(episodesResponse[0].image);

        // eslint-disable-next-line no-console
        console.log(`Podcast id ${id}`);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  useEffect(() => {
    getEpisodes();
    getIsFollowingPodcast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFollowingPodcast]);
  return (
    <ViewContainerStylings>
      <EpisodesHeaderContainer>
        <HeaderImageContainer>
          <StyledImage src={podcastImage} alt="podcast" />{" "}
        </HeaderImageContainer>

        <EpisodesHeaderStylings>
          {podcastTitle}

          {isFollowingPodcast ? (
            <FollowingContainer>
              <UnFollowPodcastStylings
                type="button"
                value="Following"
                onClick={handleUnFollow}
              />
              <FaCheckCircle
                color="green"
                size={25}
                style={{ marginBottom: "3px", marginLeft: "10px" }}
              />
            </FollowingContainer>
          ) : (
            <div>
              <AddPodcastButtonContainer>
                <FollowPodcastStylings
                  type="button"
                  value="Follow"
                  onClick={handleFollow}
                />
              </AddPodcastButtonContainer>
            </div>
          )}
        </EpisodesHeaderStylings>
      </EpisodesHeaderContainer>
      <RecentEpisodesStyleContainer>
        {
          // eslint-disable-next-line arrow-body-style
          episodes.map((episode, index) => {
            return (
              <div key={episode.id}>
                {index === 0 ? (
                  <div style={{ padding: "0px" }}>
                    <EpisodeContainer key={episode.id}>
                      <EpisodeRowContainer>
                        <EpisodeImage
                          alt="Not Availiable"
                          src={episode.image}
                        />

                        <EpisodeTitleContainer>
                          <EpisodeTitle>{episode.title} </EpisodeTitle>
                          <EpisodeDescriptionContainer>
                            <p
                              style={{
                                lineHeight: "30px",
                                font: "#404040",
                              }}
                            >
                              {episode.description.length > 100
                                ? `${episode.description
                                    .substring(0, 100)
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
                    </EpisodeContainer>
                  </div>
                ) : (
                  <div style={{ padding: "0px" }}>
                    <EpisodeContainer key={episode.id}>
                      <EpisodeRowContainer>
                        <EpisodeImage
                          alt="Not Availiable"
                          src={episode.image}
                        />
                        <EpisodeTitleContainer>
                          <EpisodeTitle>{episode.title} </EpisodeTitle>
                          <EpisodeDescriptionContainer>
                            <p
                              style={{
                                lineHeight: "30px",
                                font: "#404040",
                              }}
                            >
                              {episode.description.length > 100
                                ? `${episode.description
                                    .substring(0, 100)
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
                    </EpisodeContainer>
                  </div>
                )}
              </div>
            );
          })
        }
      </RecentEpisodesStyleContainer>
    </ViewContainerStylings>
  );
};

export default RecentEpisodesContainer;
