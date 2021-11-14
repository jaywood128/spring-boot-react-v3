import styled from "styled-components";

const CuratedPodcastRowStylingsContainer = styled.div`
  display: flex;
  overflow: scroll;
  margin-left: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const CategoryTitleStylingsContainer = styled.div`
  color: white !important;
  font-family: "Gothic A1", sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
  /* text-shadow: 2px 2px 10px white; */
`;
export { CuratedPodcastRowStylingsContainer, CategoryTitleStylingsContainer };
