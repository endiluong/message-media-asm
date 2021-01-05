import { IMAGES } from "../constant";

const offsetReducer = (state = 0, action) => {
  switch (action.type) {
    case IMAGES.SET_OFFSET:
      return state + action.payload;
    default:
      return state;
  }
};
export default offsetReducer;
