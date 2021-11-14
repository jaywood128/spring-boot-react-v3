import styled from "styled-components";
import { Link } from "react-router-dom";

const VerticalNavBarContainer = styled("div")`
  background-color: #121212;
  color: #b3b3b3;
  height: 100vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  font-family: "Roboto Mono";
  font-size: 1.2rem;
`;

const LinkTitle = styled.h2`
  text-align: center;
`;
const LinkContainer = styled.div`
  margin: 20px;
  height: 50%;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  color: #b3b3b3;
  text-decoration: none;
  :hover {
    color: white;
    text-shadow: 2px 2px 20px white;
  }
`;

const LinkItem = styled.span`
  display: flex;
  width: 70%;
  /* border: 1px solid cyan; */
  justify-content: center;
  margin: 10px 0px;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const LinkIcon = styled.i`
  padding: 10px;
`;

export {
  VerticalNavBarContainer,
  LinkTitle,
  LinkContainer,
  LinkItem,
  LinkList,
  LinkIcon,
  StyledLink,
};
