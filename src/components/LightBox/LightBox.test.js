import { shallow } from "enzyme";
import "../../setupTest";
import LightBox from "./index";
import { LIGHTBOX_MOCK } from "../../mock";

describe("LightBox", () => {
  let wrapper;
  beforeAll(() => {
    const props = LIGHTBOX_MOCK;
    wrapper = shallow(<LightBox {...props} />);
  });
  it("should be rendered correctly on opened", () => {
    expect(wrapper.find(".show")).toHaveLength(1);
  });
  it("LightBox should render correct image srcSet", () => {
    expect(wrapper.find("source").prop("srcSet")).toBe("dummy-img-link");
  });
});
