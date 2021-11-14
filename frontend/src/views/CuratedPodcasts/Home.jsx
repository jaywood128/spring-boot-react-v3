import React, { useState, useEffect } from "react";
import axios from "axios";
import PodcastContainer from "../../components/podcast/Podcast";
import ViewContainerStylings from "../application/ApplicationContainerStyling";
import {
  CuratedPodcastRowStylingsContainer,
  CategoryTitleStylingsContainer,
} from "./CuratedPodcastsStylings";

const Home = () => {
  const [featured, setFeatured] = useState([]);

  const getFeatured = () => {
    axios
      .get("http://127.0.0.1:8080/api/curated_podcasts")
      .then((response) => {
        const featuredRes = response.data[0].curated_lists;
        // eslint-disable-next-line no-console
        // console.log(`Response data ${response}`);
        setFeatured(featuredRes);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getFeatured();
  }, []);
  // eslint-disable-next-line no-console
  console.log(featured);

  return (
    <ViewContainerStylings>
      <div>
        {featured.map((category) => (
          <div key={category.id} style={{ marginTop: "20px" }}>
            <CategoryTitleStylingsContainer>
              {category.title}
            </CategoryTitleStylingsContainer>
            <CuratedPodcastRowStylingsContainer>
              {category.podcasts.map((podcast) => (
                <PodcastContainer podcast={podcast} key={podcast.id} />
              ))}
            </CuratedPodcastRowStylingsContainer>
          </div>
        ))}
      </div>
    </ViewContainerStylings>
  );
};

export default Home;
