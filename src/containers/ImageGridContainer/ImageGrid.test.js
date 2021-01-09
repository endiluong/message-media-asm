import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ImageGridContainer from "./index";
import "../../setupTest";

import { GIPHY_IMAGE_WEBP, GIPHY_IMAGE_JPG } from "../../constant";

describe("Image Grid Container", () => {
  it("should rendered", () => {
    const store = configureStore()({
      state: {
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
            user: {
              avatar_url:
                "https://media0.giphy.com/avatars/jeopardy/MTD9XvTPyAjJ.gif",
            },
            username: "jeopardy",
          },
        ],
        isLoading: false,
        error: null,
        offset: 20,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ImageGridContainer />
      </Provider>
    );
    expect(wrapper.find("ImageGridContainer")).toHaveLength(1);
  });
});
