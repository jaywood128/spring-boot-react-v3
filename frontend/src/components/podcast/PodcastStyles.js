import styled from "styled-components";
import { Link } from "react-router-dom";
import NoImageAvailible from "./icons8-image-not-available-96 copy.png";

const PodcastContainer = styled.div`
  display: flex;
  width: 200px;
  height: 300px;
  justify-content: center;
  a {
    background-color: #383838;
  }
  a:hover {
    background-color: #585858;
    -webkit-box-shadow: 3px 5px 24px grey; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 5px 24px grey; /* Firefox 3.5 - 3.6 */
    box-shadow: 3px 5px 24px grey;
  }
`;

const PodcastStylesLinkContainer = styled(Link)`
  color: white;
  text-decoration: none;
  border-radius: 6px;
  /* margin: 10px 30px 10px 20px; */
`;
const TitleContainer = styled.div`
  margin-bottom: 30px;
  width: 150px;
  font: white;
  font-weight: 600;
  text-align: center;
  padding: 0.5rem;
  height: 40px;
  margin-left: 10px;
`;
const StyledTitle = styled.span`
  font-size: 1.2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  margin: 0px 15px 0px 15px;
  border-radius: 25px;
  box-shadow: 2px 2px 30px black;
`;
ImageContainer.defaultProps = {
  src: NoImageAvailible,
};

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 25px;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px 5px 0px;
`;

export {
  PodcastContainer,
  PodcastStylesLinkContainer,
  TitleContainer,
  ImageContainer,
  StyledImage,
  CardTop,
  StyledTitle,
};
