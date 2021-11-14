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
  justify-content: center;
  align-items: center;
  background-color: white;
  height: auto;
  width: max-content;
  img {
    border-radius: 7px;
  }
`;
const SuggestedPodcastStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 20px;
  background-color: pink;
  /* a:hover {
    color: grey;
  } */
`;
const SuggestedPodcastLink = styled(Link)`
  background-color: white;
`;
const SuggestedPodcastTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* background-color: red; */
  background-color: white;
  /* margin-left: 15px; */
`;
const SuggestedPodcastTitle = styled.div`
  font-size: 0.5rem;
  background-color: white;
  /* width: 100%; */
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
