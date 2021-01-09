export const IMAGES = {
  LOAD: "IMAGES_LOAD",
  LOAD_SUCCESS: "IMAGES_LOAD_SUCCESS",
  LOAD_FAIL: "IMAGES_LOAD_FAIL",
  SET_OFFSET: "SET_OFFSET",
};
export const STATS = {
  LOAD: "STATS_LOAD",
  LOAD_SUCCESS: "STATS_LOAD_SUCCESS",
  LOAD_FAIL: "STATS_LOAD_FAIL",
};
export const API_KEY = "mDxBZ8g8muJniGkZE9PMb8JYc7Azs9yQ";
export const API_URL = "https://api.giphy.com";
export const API_PREFIX = "v1/gifs";
export const API_GENERAL_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
export const API_BASE_URL = `${API_URL}/${API_PREFIX}`;

export const GIPHY_DATA_OFFSET = 20;
export const GIPHY_DATA_LIMIT = 20;
export const GIPHY_IMAGE_WEBP = "preview_webp";
export const GIPHY_IMAGE_JPG = "480w_still";
export const GIPHY_IMAGE_FULL = "downsized";
