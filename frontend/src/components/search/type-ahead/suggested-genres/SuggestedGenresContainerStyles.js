import styled from "styled-components";
import { Link } from "react-router-dom";

const SuggestedGenresContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  margin-bottom: 2px;
`;
const SuggestedGenreStylings = styled.div`
  font-size: 1rem;
  height: 25px;
  width: 100%;
  border-radius: 5px;
  background-color: white;

  a:hover {
    color: grey;
  }
`;

const SuggestedGenreLink = styled(Link)`
  color: black;
  width: 100%;
  font-size: 0.85rem;
  padding: 0px 20px;
  text-decoration: none;
  text-shadow: 2px 2px 10px white;
  border-color: black;
`;
const BrowseByGenre = styled.h1`
  font-size: 0.8rem;
  color: grey;
`;

const SuggestedPodcastsTitle = styled.h1`
  font-size: 0.8rem;
  color: grey;
`;
export {
  SuggestedGenresContainerStyles,
  SuggestedGenreLink,
  SuggestedGenreStylings,
  BrowseByGenre,
  SuggestedPodcastsTitle,
};
