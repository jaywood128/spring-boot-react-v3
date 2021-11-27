import { Link } from "react-router-dom";
import styled from "styled-components";

// const LibraryContainerStyles = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   overflow: auto;
//   margin-left: 50px;
//   margin-top: 100px;
//   font-family: "Roboto Mono";
// `;
const PodcastLibraryContainer = styled.div`
  display: flex;
  margin: 5px 5px 15px 5px;
`;
const LibraryPodcastsTitle = styled.div`
  font-weight: 700;
  margin: 15px 0px 15px 15px;
  width: 100%;
  font-size: 1.5rem;
  color: white;
`;
const LibraryPodcastsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  margin-left: 50px;
  margin-top: 100px;
  font-family: "Roboto Mono";
`;
const AddPodcastsLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 150px;
  height: 150px;
  font-size: 2rem;
  color: white;

  a {
    background-color: #282828;
    text-decoration: none;
    color: white;
  }
`;
const TopLevelAddPodcastsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  font-weight: 600;
  justify-content: center;
  align-items: center;
`;

const AddPodcastsLink = styled(Link)`
  :hover {
  }
`;

export {
  PodcastLibraryContainer,
  LibraryPodcastsTitle,
  LibraryPodcastsContainer,
  AddPodcastsLinkContainer,
  AddPodcastsLink,
  TopLevelAddPodcastsContainer,
};
