import { takeEvery, select, call, put } from "redux-saga/effects";
import { IMAGES } from "../constant";
import { fetchImages } from "../api/giphy";
import { setImages, setoffSet, setError } from "../actions";

const getOffSet = (state) => state.offset;

function* handleImagesLoad() {
  try {
    // TODO: get offset > set to yield call
    const offset = yield select(getOffSet);
    const images = yield call(fetchImages, offset);
    const { data, pagination } = images;
    yield put(setImages(data));
    yield put(setoffSet(pagination.offset));
  } catch (error) {
    yield put(setError(error));
  }
}

//watcherSaga
export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
