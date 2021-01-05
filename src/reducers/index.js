import loadingReducer from "./loadingReducer";
import ImagesReducer from "./ImagesReducer";
import errorReducer from "./errorReducer";
import offsetReducer from "./offsetReducer";
import { combineReducers } from "redux";
import statsReducer from "./statsReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  images: ImagesReducer,
  error: errorReducer,
  offset: offsetReducer,
  imageStats: statsReducer,
});

export default rootReducer;
