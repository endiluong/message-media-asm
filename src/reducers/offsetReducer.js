import { IMAGES } from "../constant";

const offsetReducer = (state = 0, action) => {
  switch (action.type) {
    case IMAGES.SET_OFFSET:
      return action.offset;
    default:
      return state;
  }
};
export default offsetReducer;
