import styled from "styled-components";

const SearchResultsContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #484848;
  /* height: auto; */
  /* width: 100vw; */
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

export { SearchResultsContainerStyles, EpisodeSearchResultsContainer };
