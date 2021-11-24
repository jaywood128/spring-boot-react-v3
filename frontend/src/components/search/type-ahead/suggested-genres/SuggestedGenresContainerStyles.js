import styled from "styled-components";

const SuggestedGenresContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: white;
  margin-bottom: 2px;
  button:hover {
    color: grey;
  }
`;

const SuggestedGenresButton = styled.button`
  font-size: 1rem;
  height: 30px;
  border-radius: 5px;
  padding: 0;
  border: none;
  background: none;

  button:hover {
    color: grey;
  }

  button {
    padding-left: 18px;
    border: none;
    background: none;
    background-color: white;
  }
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
  SuggestedGenresButton,
  BrowseByGenre,
  SuggestedPodcastsTitle,
};
