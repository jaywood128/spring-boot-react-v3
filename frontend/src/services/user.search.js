import axios from "axios";

const BACKEND_PODCASTS = "http://127.0.0.1:8080/api";

const searchCall = (searchTerm) => {
  axios.post(`${BACKEND_PODCASTS}/full-text-search`, {
    searchTerm,
  });
};

export default searchCall;
