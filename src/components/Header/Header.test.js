import { shallow } from "enzyme";
import "../../setupTest";
import Header from "./index";

describe("App Header", () => {
  it("should be rendered with app name", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(".header-box")).toHaveLength(1);
    expect(wrapper.find("h1").text()).toBe("Giphy Images");
  });
});
