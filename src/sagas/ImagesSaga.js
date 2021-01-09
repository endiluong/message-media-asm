import { takeEvery, select, call, put } from "redux-saga/effects";
import { IMAGES } from "../constant";
import { fetchImages } from "../api/giphy";
import { setImages, setoffSet, setError } from "../actions";
import { GIPHY_DATA_OFFSET } from "../constant";

const getOffSet = (state) => state.offset;

function* handleImagesLoad() {
  try {
    const offset = yield select(getOffSet);

    const images = yield call(fetchImages, offset);
    if (images) {
      const { data, pagination } = images;

      yield put(setImages(data));
      yield put(setoffSet(pagination.offset + GIPHY_DATA_OFFSET));
    }
  } catch (error) {
    yield put(setError(error));
  }
}

//watcherSaga
export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
