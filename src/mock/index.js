import {
  GIPHY_IMAGE_WEBP,
  GIPHY_IMAGE_JPG,
  GIPHY_IMAGE_FULL,
} from "../constant";

export const IMAGE_MOCK = {
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
      [GIPHY_IMAGE_FULL]: {
        height: "270",
        size: "1045466",
        url:
          "https://media0.giphy.com/media/KfSUEbdncm6k8gCIBr/480w_s.jpg?cid=59a25e7209btwcvu73t0cc9jgppok8n46ux9dfpsdd1m2lxx&rid=480w_s.jpg",
        width: "480",
      },
    },
    title: "Alex Trebek Football GIF by Jeopardy!",
    type: "gif",
    url:
      "https://giphy.com/gifs/jeopardy-football-alex-trebek-KfSUEbdncm6k8gCIBr",
    username: "jeopardy",
  },
};
export const IMAGE_LIST_ITEM_MOCK = [
  {
    id: "KfSUEbdncm6k8gCIBr",
    images: IMAGE_MOCK,
    title: "Alex Trebek Football GIF by Jeopardy!",
    trending_datetime: "2021-01-09 20:08:05",
    url:
      "https://giphy.com/gifs/jeopardy-football-alex-trebek-KfSUEbdncm6k8gCIBr",
    user: {
      avatar_url: "https://media0.giphy.com/avatars/jeopardy/MTD9XvTPyAjJ.gif",
    },
    username: "jeopardy",
  },
  {
    id: "KfSUEbdncm6k8gCIBBCDE",
    images: IMAGE_MOCK,
    title: "Mocky Gif",
    trending_datetime: "2021-01-09 20:08:05",
    url:
      "https://giphy.com/gifs/jeopardy-football-alex-trebek-KfSUEbdncm6k8gCIBr",
    user: {
      avatar_url: "https://media0.giphy.com/avatars/jeopardy/MTD9XvTPyAjJ.gif",
    },
    username: "jeopardy",
  },
];
export const ERR_404_MOCK = {
  code: 404,
  message: " Network Error",
};
export const LIGHTBOX_MOCK = {
  isOpen: true,
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
    [GIPHY_IMAGE_FULL]: {
      height: "270",
      size: "1045466",
      url: "dummy-img-link",
      width: "480",
    },
  },
  title: "Mock LightBox",
};
