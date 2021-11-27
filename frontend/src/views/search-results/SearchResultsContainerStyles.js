import styled from "styled-components";

const EpisodesSearchResultsContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #282828;
  color: white;
  margin-left: 50px;
  /* flex-direction: column; */
  flex-wrap: wrap;
`;
const EpisodeSearchResultsContainer = styled.div`
  display: flex;
  height: 10px;
  width: 700px;
  flex: 1;
  font-family: "Gothic A1, sans-serif";
`;
const TopPodcastsByGenreResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  margin-left: 25px;
`;

const TopPodcastByGenreResultsTitle = styled.h1`
  font-weight: 700;
`;
const TopPodcastByGenreResultsTitleContainer = styled.div`
  width: 100%;
  font-size: 0.75rem;
  color: white;
`;
const SearchResultsEpisodesTitle = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 25px 0px 25px 25px;
  color: white;
  align-items: center;
`;
const EpisodesSearchResultContainer = styled.div`
  margin-left: 30px;
`;

export {
  EpisodesSearchResultsContainerStyles,
  EpisodeSearchResultsContainer,
  TopPodcastsByGenreResultsContainer,
  TopPodcastByGenreResultsTitle,
  TopPodcastByGenreResultsTitleContainer,
  SearchResultsEpisodesTitle,
  EpisodesSearchResultContainer,
};
