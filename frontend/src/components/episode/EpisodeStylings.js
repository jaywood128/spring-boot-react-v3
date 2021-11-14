import styled from "styled-components";

const EpisodeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  width: 700px;
  flex: 1;
  font-family: "Gothic A1, sans-serif";
`;

const EpisodeTitle = styled.h1`
  padding: 1rem;
  height: 5px;
  text-align: start;
  font-size: 16px;
  font-family: "Gothic A1", sans-serif;
  background-color: #404040;
`;
const EpisodeTitleContainer = styled.div`
  margin-left: 10px;
  color: white;
`;

const EpisodeImage = styled.img`
  max-width: 100%;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  box-shadow: 2px 5px 10px black;
`;

const EpisodeAudioLinkContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 20px;
  background-color: #404040;
`;
const EpisodeDescriptionContainer = styled.div`
  display: flex;
  height: 125px;
  background-color: #404040;
  font-size: 16px;
  flex-wrap: wrap;
`;
const EpisodeStyledPlayLink = styled.a`
  color: white;
  text-align: left;
  text-decoration: none;
  border: 1.5px;
  border-radius: 50%;

  :hover {
    background-color: rgba(64, 64, 64, 0.45);
    -webkit-box-shadow: 3px 5px 24px grey; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 5px 24px grey; /* Firefox 3.5 - 3.6 */
    box-shadow: 3px 5px 24px grey;
  }
`;

export {
  EpisodeContainer,
  EpisodeTitle,
  EpisodeTitleContainer,
  EpisodeImage,
  EpisodeAudioLinkContainer,
  EpisodeDescriptionContainer,
  EpisodeStyledPlayLink,
};
