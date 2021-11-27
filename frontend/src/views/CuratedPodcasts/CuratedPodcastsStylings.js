import styled from "styled-components";

const CuratedPodcastRowStylingsContainer = styled.div`
  display: flex;
  overflow: scroll;
  height: auto;
  width: 100%;
  margin-left: 10px;
  margin-top: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const CategoryTitleStylingsContainer = styled.div`
  color: white;
  font-family: "Roboto Mono" monospace;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
  /* text-shadow: 2px 2px 10px white; */
`;
export { CuratedPodcastRowStylingsContainer, CategoryTitleStylingsContainer };
