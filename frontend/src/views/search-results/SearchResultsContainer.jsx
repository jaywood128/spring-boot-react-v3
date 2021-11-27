/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaPlayCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import ApplicationContainerStylings from "../application/ApplicationContainerStyling";
import {
  TopPodcastsByGenreResultsContainer,
  TopPodcastByGenreResultsTitle,
  TopPodcastByGenreResultsTitleContainer,
  SearchResultsEpisodesTitle,
  EpisodesSearchResultContainer,
  EpisodesSearchResultsContainerStyles,
} from "./SearchResultsContainerStyles";

import {
  EpisodeContainer,
  EpisodeTitleContainer,
  EpisodeImage,
  EpisodeTitle,
  EpisodeDescriptionContainer,
  EpisodeAudioLinkContainer,
  EpisodeStyledPlayLink,
  EpisodeImageContainer,
} from "../../components/episode/EpisodeStylings";
import { EpisodeRowContainer } from "../RecentEpisodes/RecentEpisodesStyleContainer";
import {
  SearchStyles,
  SearchInputContainer,
  SearchInput,
  SearchIconContainer,
} from "./SearchStyles";
// eslint-disable-next-line no-unused-vars
import typeAheadData from "../../data/type-ahead";
import episodeData from "../../data/episodes-data";
import {
  TypeAheadContainerStyles,
  HorizontalLine,
} from "../../components/search/type-ahead/TypeAheadContainerStyles";
import {
  SuggestedTermsConatinerStylings,
  SuggestedTermStylings,
  // SuggestedTermLink,
} from "../../components/search/type-ahead/suggested-terms/SuggestedTermsContainerStyles";
import {
  BrowseByGenre,
  SuggestedPodcastsTitle,
  SuggestedGenresButton,
  SuggestedGenresContainerStyles,
} from "../../components/search/type-ahead/suggested-genres/SuggestedGenresContainerStyles";
import SuggestedPodcastsContainer from "../../components/search/type-ahead/suggested-podcasts/SuggestedPostcastsContainer";
import TopBarContainer from "../../components/top-bar/TopBarContainer";
import PodcastContainer from "../../components/podcast/Podcast";

// eslint-disable-next-line arrow-body-style
const SearchResultsContainer = () => {
  // const { data } = TypeAheadData;

  // to-do: replace all occurances of typeAheadSearchField with searchField?
  const [searchField, setSearchField] = useState({
    textInput: "",
  });
  const [typeAheadSearchField, setTypeAheadSearchField] = useState({
    textInput: "",
  });
  // Handles the state for the onCLick event search in the SuggestedTermStylings
  const [suggestedSearchTermField, setSuggestedSearchTermField] = useState({
    textInput: "",
  });
  const [searchResults, setSearchResults] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [typeAheadResults, setTypeAheadResults] = useState([]);
  const [suggestedGenreId, setSuggestedGenreId] = useState("");
  const [
    onClickGenreReturnedTopPodcastsResults,
    setOnClickGenreReturnedTopPodcastsResults,
  ] = useState([]);
  const BACKEND_PODCASTS = "http://127.0.0.1:8080/api";
  const isEmpty = (obj) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const prop in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  };

  const setInitalResultsState = () => {
    setSearchResults([]);
  };

  const setInitialTextInputState = () => {
    setSearchField({
      textInput: "",
    });
  };
  const setInitialTextInputSuggestedSearchTermField = () => {
    setSuggestedSearchTermField({
      textInput: "",
    });
  };

  const setInitalTypeAheadResultsState = () => {
    setTypeAheadResults([]);
  };

  async function postSearch() {
    // eslint-disable-next-line no-console
    console.log(
      `Text input getting submitted to back end ${searchField.textInput}`
    );
    axios
      .post(`${BACKEND_PODCASTS}/full-text-search`, {
        textInput: searchField.textInput,
      })
      // eslint-disable-next-line no-console
      .then((response) => {
        setSearchResults(response.data.searchResults);
        // eslint-disable-next-line no-console
        console.log(
          `Search Results in Search.jsx: ${JSON.stringify(
            response.data.searchResults
          )}`
        );
        setInitialTextInputState();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  async function postSuggestedSearchTerm() {
    // eslint-disable-next-line no-console
    console.log(
      `Suggested search term submittiing to backend ${JSON.stringify(
        suggestedSearchTermField
      )}`
    );
    axios
      .post(`${BACKEND_PODCASTS}/full-text-search`, {
        textInput: suggestedSearchTermField.textInput,
      })
      // eslint-disable-next-line no-console
      .then((response) => {
        setSearchResults(response.data.results);
        // setInitialTextInputSuggestedSearchTermField();
        console.log(
          `Search results after onclick of suggested search term${JSON.stringify(
            response.data.results
          )}`
        );
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  async function postTypeAheadSearch() {
    // eslint-disable-next-line no-console
    console.log(
      `Text input from typeahead search field submitted to back end ${JSON.stringify(
        typeAheadSearchField.textInput
      )}`
    );
    axios
      .post(`${BACKEND_PODCASTS}/type-ahead-search`, {
        textInput: window.localStorage.getItem("typeAheadSearchField"),
      })
      // eslint-disable-next-line no-console
      .then((response) => {
        setTypeAheadResults(response.data);

        // eslint-disable-next-line no-console
        console.log(
          `Type ahead post results Search.jsx: COUNT ${
            response.data.count
          }  RESP ${JSON.stringify(response)}`
        );
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  async function fetchTopPodcastsBasedOnGenreId() {
    // eslint-disable-next-line no-console
    console.log(
      `Suggested Genre ID ${JSON.stringify(suggestedGenreId.genreId)}`
    );
    axios
      .get(`${BACKEND_PODCASTS}/best-podcasts/${suggestedGenreId.genreId}`)
      // eslint-disable-next-line no-console
      .then((response) => {
        setOnClickGenreReturnedTopPodcastsResults(response.data.podcasts);
        setSuggestedGenreId("");

        // eslint-disable-next-line no-console
        console.log(
          `Top podcast's based on genre-id ${
            response.data.count
          }  RESP ${JSON.stringify(response)}`
        );
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setTypeAheadSearchField((userInput) => ({
      ...userInput,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearchInputSubmit = (e) => {
    // eslint-disable-next-line no-console
    console.log(`Handle Search input submit ${e.target.value}`);
    e.persist();
    setSearchField((userInputSearch) => ({
      ...userInputSearch,
      [e.target.name]: e.target.value,
    }));
    if (searchField.textInput !== "") {
      postSearch();
    }
  };

  const handleSuggestedTermClick = (e) => {
    // eslint-disable-next-line no-alert
    alert(`Suggested term clicked!${e.target.value}`);
    // eslint-disable-next-line no-console
    console.log(
      `Suggested term clicked name!${JSON.stringify(e.target.value)}`
    );
    const { value, name } = e.target;
    setSuggestedSearchTermField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setInitalTypeAheadResultsState();
  };
  const handleSuggestedGenreIdClick = (e) => {
    // eslint-disable-next-line no-alert
    alert(`Suggested term clicked!${e.target.value}`);
    // eslint-disable-next-line no-console
    console.log(
      `Suggested term clicked name!${JSON.stringify(e.target.value)}`
    );
    const { value, name } = e.target;
    setSuggestedGenreId((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setInitalTypeAheadResultsState();

    if (!isEmpty(searchResults)) {
      setInitalResultsState();
    }
  };

  const renderTypeAheadComponent = () => {
    if (!isEmpty(typeAheadResults)) {
      // eslint-disable-next-line no-console
      console.log(`Type ahead results ${JSON.stringify(typeAheadResults)}`);
      return (
        <TypeAheadContainerStyles>
          <SuggestedTermsConatinerStylings>
            {typeAheadResults.terms.length === 0 ? (
              <div> </div>
            ) : (
              typeAheadResults.terms.map((term) => (
                <SuggestedTermStylings key={term}>
                  <button
                    type="button"
                    value={term}
                    name="textInput"
                    // eslint-disable-next-line no-alert
                    onClick={handleSuggestedTermClick}
                  >
                    {term}
                  </button>
                </SuggestedTermStylings>
              ))
            )}
          </SuggestedTermsConatinerStylings>
          {typeAheadResults.genres.length > 0 ? (
            <div>
              <HorizontalLine />
              <BrowseByGenre>BROWSE BY CATEGORY</BrowseByGenre>

              {typeAheadResults.genres.map((genre) => {
                const { id, name, parent_id } = genre;
                return (
                  <SuggestedGenresContainerStyles key={id}>
                    <SuggestedGenresButton
                      type="button"
                      value={id}
                      name="genreId"
                      onClick={handleSuggestedGenreIdClick}
                    >
                      {name}
                    </SuggestedGenresButton>
                  </SuggestedGenresContainerStyles>
                );
              })}
              <HorizontalLine />
            </div>
          ) : (
            <div> </div>
          )}

          {typeAheadResults.podcasts.length > 0 ? (
            <div>
              <HorizontalLine />
              <SuggestedPodcastsTitle>PODCASTS</SuggestedPodcastsTitle>
              <SuggestedPodcastsContainer
                podcasts={typeAheadResults.podcasts}
              />
            </div>
          ) : (
            <div> </div>
          )}
        </TypeAheadContainerStyles>
      );
    }
    return "";
  };

  useEffect(() => {
    window.localStorage.setItem(
      "typeAheadSearchField",
      typeAheadSearchField.textInput
    );
    if (window.localStorage.getItem("typeAheadSearchField") !== "") {
      postTypeAheadSearch();
    } else {
      setInitalTypeAheadResultsState();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeAheadSearchField]);

  useEffect(() => {
    setTypeAheadSearchField((userInput) => ({
      ...userInput,
      textInput: window.localStorage.getItem("typeAheadSearchField"),
    }));
    console.log(
      `useEffect type ahead search field ${JSON.stringify(
        typeAheadSearchField.textInput
      )}`
    );
  }, []);

  useEffect(() => {
    if (suggestedSearchTermField.textInput !== "") {
      postSuggestedSearchTerm();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggestedSearchTermField]);

  useEffect(() => {
    if (suggestedGenreId !== "") {
      fetchTopPodcastsBasedOnGenreId();
    }
  }, [suggestedGenreId]);

  return (
    <ApplicationContainerStylings onClick={setInitalTypeAheadResultsState}>
      <TopBarContainer />
      <SearchStyles>
        <SearchInputContainer>
          <SearchIconContainer>
            <BsSearch size={30} className="fas fa-search" />
          </SearchIconContainer>
          <form onSubmit={handleSearchInputSubmit}>
            <SearchInput
              name="textInput"
              type="search"
              value={window.localStorage.getItem("typeAheadSearchField")}
              placeholder="Search for content"
              onChange={handleSearchInputChange}
              on
            />
            {renderTypeAheadComponent()}
          </form>
        </SearchInputContainer>
      </SearchStyles>

      <EpisodesSearchResultsContainerStyles>
        {/* {!isEmpty(onClickGenreReturnedTopPodcastsResults) ? ( */}
        <TopPodcastsByGenreResultsContainer>
          <TopPodcastByGenreResultsTitleContainer>
            <TopPodcastByGenreResultsTitle>
              Podcasts{" "}
            </TopPodcastByGenreResultsTitle>
          </TopPodcastByGenreResultsTitleContainer>
          {typeAheadData[0].podcasts.map((podcast) => (
            <PodcastContainer podcast={podcast} key={podcast.id} />
          ))}
        </TopPodcastsByGenreResultsContainer>
        {/* ) : ( */}
        {/* <div />
      )} */}
        {searchResults.length === 0 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "40px",
            }}
          >
            <h1>
              <BiSearchAlt /> Get searching!
            </h1>
          </div>
        ) : (
          <div>
            <SearchResultsEpisodesTitle>Episodes </SearchResultsEpisodesTitle>
            <EpisodesSearchResultContainer>
              {searchResults.map((episode) => (
                <EpisodeContainer key={episode.id}>
                  <EpisodeRowContainer>
                    <EpisodeImageContainer>
                      <EpisodeImage alt="not availible" src={episode.image} />
                    </EpisodeImageContainer>

                    <EpisodeTitleContainer>
                      <EpisodeTitle> {episode.title_original}</EpisodeTitle>
                      <EpisodeDescriptionContainer>
                        <p>
                          {episode.description_highlighted.length > 255
                            ? `${episode.description_original
                                .substring(0, 255)
                                .replace(/<[^>]*>?/gm, "")}...`
                            : episode.description_highlighted}
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
        )}
      </EpisodesSearchResultsContainerStyles>
    </ApplicationContainerStylings>
  );
};

export default SearchResultsContainer;
