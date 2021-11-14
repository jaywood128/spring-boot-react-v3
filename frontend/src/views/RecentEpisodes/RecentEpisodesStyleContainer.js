import styled from "styled-components";

const RecentEpisodesStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 1000px;
  background-color: #484848;
  font-family: "Gothic A1", sans-serif;
  color: #ffffff;
`;

const EpisodeRowContainer = styled.div`
  display: flex;
  flex: 20%;
  align-items: center;
  font-family: "Raleway";
  padding: 20px;
  margin: 20px;
  font-size: 1rem;
  border-radius: 20px;
  white-space: normal;
  background-color: #404040;
  color: #b3b3b3;
`;

const EpisodesHeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 5px 28px;
  margin-bottom: 50px;
  align-items: center;
  color: white !important;
  font-family: "Gothic A1", sans-serif;
  text-transform: uppercase;
  font-size: 3.5rem;
  text-align: center;
`;
const EpisodesHeaderStylings = styled.div`
  text-shadow: 3px 4px 4px black;
  margin-left: 20px;
`;

const HeaderImageContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  height: 40%;
  margin-top: 50px;
  border-radius: 25px;
  box-shadow: 2px 5px 30px black;
`;
const AddPodcastButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  font-size: 1.2rem;
  height: 30%;
  width: 30%;
  background-color: #404040;
`;
const FollowPodcastStylings = styled.input`
  font-size: 1.2rem;
  border: 1px solid white;
  width: 130px;
  height: 40px;
  color: white;
  background-color: #404040;
  padding: 8px 16px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  box-shadow: 2px 5px 10px black;
  :hover {
    background-color: rgba(64, 64, 64, 0.45);
    -webkit-box-shadow: 3px 5px 24px grey; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 5px 24px grey; /* Firefox 3.5 - 3.6 */
    box-shadow: 3px 5px 24px grey;
  }
`;

const FollowingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  font-size: 1.2rem;
  height: 30%;
  width: 30%;
`;

const FollowingText = styled.h1`
  margin-top: 30px;
`;
const UnFollowPodcastStylings = styled.input`
  font-size: 1.2rem;
  border: 1px solid white;
  width: 130px;
  height: 40px;
  color: white;
  background-color: #404040;
  padding: 8px 16px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  box-shadow: 2px 5px 10px black;
  :hover {
    background-color: rgba(64, 64, 64, 0.45);
    -webkit-box-shadow: 3px 5px 24px grey; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 5px 24px grey; /* Firefox 3.5 - 3.6 */
    box-shadow: 3px 5px 24px grey;
  }
`;

export {
  RecentEpisodesStyleContainer,
  EpisodeRowContainer,
  EpisodesHeaderContainer,
  EpisodesHeaderStylings,
  HeaderImageContainer,
  AddPodcastButtonContainer,
  FollowPodcastStylings,
  FollowingContainer,
  FollowingText,
  UnFollowPodcastStylings,
};
