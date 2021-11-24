import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ViewContainerStyles from "../application/ApplicationContainerStyling";

const GenresContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: "Roboto Mono";
  font-size: 1.5rem;
  font: white;
  margin-left: 100px;
  margin-top: 100px;
`;
const GenreContainerStyles = styled.div`
  width: 280px;
  height: 150px;
  a:hover {
    background-color: rgba(64, 64, 64, 0.45);
    -webkit-box-shadow: 3px 5px 24px grey; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 5px 24px grey; /* Firefox 3.5 - 3.6 */
    box-shadow: 10px 10px 5px grey;
    border: solid 1px;
  }
`;

const GenreLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 20px;
  border-radius: 6px;
`;

const GenresContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const [genres, setGenres] = useState([]);
  const BACKEND_PODCASTS = "http://127.0.0.1:8080/api";

  const fetchGenres = async () => {
    axios
      .get(`${BACKEND_PODCASTS}/get-genres`)
      .then((response) => {
        setGenres(response.data.genres);
        console.log(response.data.genres);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
    // const data = await response.json();
    // setGenres(data);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const isEmpty = (obj) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const prop in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  };
  return (
    <ViewContainerStyles>
      {!isEmpty(genres) ? (
        <GenresContainerStyles>
          {genres.map((genre) => {
            const { name, id } = genre;
            return (
              <GenreContainerStyles key={id}>
                <GenreLink to={`/top-podcasts-by-genre/${id}`}>
                  {" "}
                  {name}{" "}
                </GenreLink>
              </GenreContainerStyles>
            );
          })}
        </GenresContainerStyles>
      ) : (
        <div />
      )}
    </ViewContainerStyles>
  );
};

export default GenresContainer;
