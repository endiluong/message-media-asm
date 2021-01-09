import { shallow } from "enzyme";
import "../../setupTest";
import ImageCard from "./index";
import { GIPHY_IMAGE_WEBP, GIPHY_IMAGE_JPG } from "../../constant";

describe("Image Card", () => {
  let wrapper;

  beforeAll(() => {
    const props = {
      image: {
        id: "KfSUEbdncm6k8gCIBr",
        images: {
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

        import_datetime: "2020-05-26 17:35:49",
        is_sticker: 0,
        rating: "g",
        slug: "jeopardy-football-alex-trebek-KfSUEbdncm6k8gCIBr",
        source: "",
        source_post_url: "",
        source_tld: "",
        title: "Alex Trebek Football GIF by Jeopardy!",
        trending_datetime: "2021-01-09 20:08:05",
        type: "gif",
        url:
          "https://giphy.com/gifs/jeopardy-football-alex-trebek-KfSUEbdncm6k8gCIBr",
        username: "jeopardy",
      },
    };
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
