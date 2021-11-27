import styled from "styled-components";
import { Link } from "react-router-dom";

const SuggestedPodcastsContainerStyles = styled.div`
  border-radius: 5px;
  height: auto;
  text-decoration: none;
`;

const SuggestedPodcastContainer = styled.div`
  display: flex;
  height: auto;
  background-color: white;
  /* border: solid; */
  div:hover {
    color: grey;
  }
`;
const SuggestPocastImageContainer = styled.div`
  display: flex;
  background-color: white;
  height: auto;
  /* width: fit-content; */
  width: max-content;
  img {
    border-radius: 7px;
  }
`;
const SuggestedPodcastStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 20px;
  /* a:hover {
    color: grey;
  } */
`;
const SuggestedPodcastLink = styled(Link)`
  background-color: white;
  color: inherit;
  text-decoration: none;
`;
const SuggestedPodcastTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* background-color: red; */
  background-color: white;
  margin-left: 15px;
`;
const SuggestedPodcastTitle = styled.div`
  font-size: 0.7rem;
  text-decoration: none;
  background-color: white;
  width: 100%;
  h1 {
    text-decoration: none;
  }
`;

const SuggestedPodcastPublisher = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 15px;
  height: 5px;
  font-size: 0.6rem;
  background-color: white;
`;

const SuggestedPodcastImageStyles = styled.img`
  width: 50px;
  height: auto;
`;

export {
  SuggestedPodcastsContainerStyles,
  SuggestPocastImageContainer,
  SuggestedPodcastStyles,
  SuggestedPodcastImageStyles,
  SuggestedPodcastPublisher,
  SuggestedPodcastTitle,
  SuggestedPodcastTitleContainer,
  SuggestedPodcastContainer,
  SuggestedPodcastLink,
};
