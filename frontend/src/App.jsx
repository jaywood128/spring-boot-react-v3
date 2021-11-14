import React from "react";
import styled from "styled-components";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./views/CuratedPodcasts/Home";
import VerticalNavBar from "./components/vertical-nav-bar/VerticalNavBar";
import RecentEpisodesContainer from "./views/RecentEpisodes/RecentEpisodesContainer";
import LibraryContainer from "./views/Library/LibraryContainer";
import Signup from "./views/user-actions/sign-up/Signup";
import SearchResultsContainer from "./views/search-results/SearchResultsContainer";
// import SignIn from "./views/user-actions/SignIn";
// import Signup from "./views/user-actions/Signup";

const history = createBrowserHistory();

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: lightcyan;
`;

function App() {
  return (
    <Router history={history}>
      <AppContainer>
        <VerticalNavBar />
        <BodyContainer>
          <Switch>
            <Route path="/episodes/:podcastTitle/:id">
              <RecentEpisodesContainer />
            </Route>
            <Route path="/library">
              <LibraryContainer />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/sign-up">
              <Signup />
            </Route>
            <Route exact path="/search-results-container">
              <SearchResultsContainer />
            </Route>
          </Switch>
        </BodyContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
