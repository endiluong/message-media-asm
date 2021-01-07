import axios from "axios";
import {
  API_BASE_URL,
  API_GENERAL_HEADERS,
  API_KEY,
  GIPHY_DATA_LIMIT,
} from "../constant";

const giphy = axios.create({
  baseURL: API_BASE_URL,
  headers: API_GENERAL_HEADERS,
});

const fetchImages = async (offset) => {
  const response = await giphy.get("/trending", {
    params: {
      api_key: API_KEY,
      limit: GIPHY_DATA_LIMIT,
      offset,
    },
  });

  if (response.status >= 400) {
    throw new Error(response.errors);
  }
  return response.data;
};

export { fetchImages };
