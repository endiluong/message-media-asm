import { shallow } from "enzyme";
import "../../setupTest";
import ImageGrid from "./index";
import { IMAGE_LIST_ITEM_MOCK, ERR_404_MOCK } from "../../mock";

describe("List of Image", () => {
  const errorProps = {
    images: [],
    error: ERR_404_MOCK,
  };
  const workingProps = {
    error: null,
    images: IMAGE_LIST_ITEM_MOCK,
  };
  it("shouldn't be rendered on Image Grid when having Error but show Error instead", () => {
    const wrapper = shallow(<ImageGrid {...errorProps} />);
    expect(wrapper.find("#error-box")).toHaveLength(1);
    expect(wrapper.find(".image-grid")).toHaveLength(0);
  });

  it("should be rendered a list of image card when having data", () => {
    const wrapper = shallow(<ImageGrid {...workingProps} />);
    expect(wrapper.find("#error-box")).toHaveLength(0);
    expect(wrapper.find(".image-grid")).toHaveLength(1);
    expect(wrapper.find("ImageCard")).toHaveLength(2);
  });
});
