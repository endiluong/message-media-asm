import { IMAGES } from "../constant";

const imagesReducer = (state = [], action) => {
  if (action.type === IMAGES.LOAD_SUCCESS) {
    return [...state, ...action.images];
  }
  return state;
};

export default imagesReducer;
