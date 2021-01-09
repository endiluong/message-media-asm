import { shallow } from "enzyme";
import "../../setupTest";
import ImageCard from "./index";
import { IMAGE_MOCK } from "../../mock";

describe("Image Card", () => {
  let wrapper;

  beforeAll(() => {
    const props = IMAGE_MOCK;
    wrapper = shallow(<ImageCard {...props} />);
  });
  it("should be render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should show lightbox on click", () => {
    wrapper.find("picture").simulate("click");
    const lightbox = wrapper.find("LightBox");
    expect(lightbox.prop("isOpen")).toBe(true);
  });
  it("should still render avatar with empty space when having no user", () => {
    expect(wrapper.find(".card-user").prop("src")).toBe(undefined);
    expect(wrapper.find(".card-user")).toHaveLength(1);
  });
});
