import { shallow } from "enzyme";
import "../../setupTest";
import ImageGrid from "./index";
import { GIPHY_IMAGE_WEBP, GIPHY_IMAGE_JPG } from "../../constant";

describe("List of Image", () => {
  const errorProps = {
    images: [],
    error: {
      code: 404,
      message: " Network Error",
    },
  };
  const workingProps = {
    error: null,
    images: [
      {
        id: "KfSUEbdncm6k8gCIBr",
        images: [
          {
            [GIPHY_IMAGE_WEBP]: {
              height: "86",
              size: "32402",
              url:
                "https://media0.giphy.com/media/KfSUEbdncm6k8gCIBr/giphy-preview.webp?cid=59a25e7209btwcvu73t0cc9jgppok8n46ux9dfpsdd1m2lxx&rid=giphy-preview.webp",
              width: "152",
            },
            [GIPHY_IMAGE_JPG]: {
              height: "270",
              size: "1045466",
              url:
                "https://media0.giphy.com/media/KfSUEbdncm6k8gCIBr/480w_s.jpg?cid=59a25e7209btwcvu73t0cc9jgppok8n46ux9dfpsdd1m2lxx&rid=480w_s.jpg",
              width: "480",
            },
          },
        ],
        title: "Alex Trebek Football GIF by Jeopardy!",
        trending_datetime: "2021-01-09 20:08:05",
        url:
          "https://giphy.com/gifs/jeopardy-football-alex-trebek-KfSUEbdncm6k8gCIBr",
        user: {
          avatar_url:
            "https://media0.giphy.com/avatars/jeopardy/MTD9XvTPyAjJ.gif",
        },
        username: "jeopardy",
      },
    ],
  };
  it("shouldn't be rendered on Image Grid when having Error but show Error instead", () => {
    const wrapper = shallow(<ImageGrid {...errorProps} />);
    expect(wrapper.find("#error-box")).toHaveLength(1);
    expect(wrapper.find(".image-grid")).toHaveLength(0);
  });

  it("should be rendered a list of image card when having data", () => {
    const wrapper = shallow(<ImageGrid {...workingProps} />);
    expect(wrapper.find(".image-grid")).toHaveLength(1);
    expect(wrapper.find("#error-box")).toHaveLength(0);
  });
});
