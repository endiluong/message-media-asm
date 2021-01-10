import { IMAGES } from "../constant";
import { setImages, setoffSet } from "./index";

describe("actions", () => {
  it("should create an action to load images", () => {
    const expectedAction = {
      type: IMAGES.LOAD_SUCCESS,
      images: [],
    };
    expect(setImages([])).toEqual(expectedAction);
  });
  it("should update offset", () => {
    const expectedAction = {
      type: IMAGES.SET_OFFSET,
      offset: 20,
    };
    expect(setoffSet(20)).toEqual(expectedAction);
  });
});
