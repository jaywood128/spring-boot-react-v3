import styled from "styled-components";
import { Link } from "react-router-dom";

const TopBarStylesContainer = styled.div`
  background-color: pink;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  margin-bottom: 0;
`;

const TitleLink = styled(Link)`
  color: white;
  font-size: 3rem;
  padding: 0 20px;
  text-decoration: none;
  text-shadow: 2px 2px 10px white;
  font-family: "Poppins";
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export { TopBarStylesContainer, TitleLink, IconContainer };
