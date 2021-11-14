import React from "react";
import {
  VerticalNavBarContainer,
  LinkContainer,
  LinkList,
  LinkItem,
  LinkIcon,
  StyledLink,
} from "./VerticalNavBarStyles";
import { TitleLink, IconContainer } from "../top-bar/TopBarStylesContainer";
// import { Link } from 'react-router-dom';
const VerticalNavBar = () => (
  <VerticalNavBarContainer>
    <LinkContainer>
      <TitleLink to="/">
        <IconContainer>
          <i className="fas fa-podcast fa-1x" />
        </IconContainer>{" "}
      </TitleLink>
      <LinkList>
        <LinkItem>
          <StyledLink to="/search-results-container">
            <LinkIcon className="fas fa-search" />
            <span>Search</span>
          </StyledLink>
        </LinkItem>

        <LinkItem>
          <StyledLink to="/" bsClass="link">
            <LinkIcon className="fas fa-list" />
            <span>Shows</span>
          </StyledLink>
        </LinkItem>

        <LinkItem>
          <StyledLink to="/library">
            <LinkIcon className="fas fa-star" />
            <span>Library</span>
          </StyledLink>
        </LinkItem>

        <LinkItem>
          <StyledLink to="/">
            <LinkIcon className="fas fa-star" />
            <span>Explore</span>
          </StyledLink>
        </LinkItem>
      </LinkList>
    </LinkContainer>
  </VerticalNavBarContainer>
);

export default VerticalNavBar;
