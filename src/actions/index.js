import { IMAGES } from "../constant";

const loadImages = () => ({
  type: IMAGES.LOAD,
});
const setImages = (images) => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});
const setError = (error) => ({
  type: IMAGES.LOAD_FAIL,
  error,
});
const setoffSet = (offset) => ({
  type: IMAGES.SET_OFFSET,
  offset,
});

export { loadImages, setImages, setError, setoffSet };
