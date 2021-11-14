import styled from "styled-components";
import { Link } from "react-router-dom";
import NoImageAvailible from "./icons8-image-not-available-96 copy.png";

const PodcastStylesContainer = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: #404040;
  border-radius: 6px;
  margin: 10px 30px;
  width: 300px;
  height: 300px;

  :hover {
    background-color: rgba(64, 64, 64, 0.45);
    -webkit-box-shadow: 3px 5px 24px grey; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 5px 24px grey; /* Firefox 3.5 - 3.6 */
    box-shadow: 3px 5px 24px grey;
  }
`;
const TitleContainer = styled.div`
  padding: 0.5rem;
  height: 25px;
  width: 300px;
  text-align: center;
`;
const StyledTitle = styled.span`
  font-size: 1.2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  border-radius: 25px;
  box-shadow: 2px 2px 30px black;
`;
ImageContainer.defaultProps = {
  src: NoImageAvailible,
};

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 25px;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px 5px 0px;
`;

export {
  PodcastStylesContainer,
  TitleContainer,
  ImageContainer,
  StyledImage,
  CardTop,
  StyledTitle,
};
