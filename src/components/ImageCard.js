import React, { useState } from "react";
import { GIPHY_IMAGE_WEBP, GIPHY_IMAGE_JPG } from "../constant";
import LightBox from "./LightBox";

import "./ImageCard.scss";

const ImageCard = (props) => {
  const [isOpenLightBox, setOpenLightBox] = useState(false);

  const renderer = () => {
    const { image } = props;
    const { title, images, user } = image;
    return (
      <div className="col-6 col-md-4 col-lg-3">
        <section className="card">
          <div className="card-wrapper">
            <picture
              className="card-image"
              onClick={() => setOpenLightBox(true)}
            >
              <source srcSet={images[GIPHY_IMAGE_WEBP].url} type="image/webp" />
              <source srcSet={images[GIPHY_IMAGE_JPG].url} type="image/jpeg" />
              <img src={images[GIPHY_IMAGE_JPG].url} alt={title} />
            </picture>
            <div className="card-bottom d-flex align-items-center justify-content-between">
              <div className="mr-auto">
                <i className="fas fa-paperclip f6"></i>
              </div>
              <div className="ml-auto">
                <span className="ml-2">
                  <i className="fas fa-eye mr-2"></i>
                </span>
                <span className="ml-2">
                  <i className="fas fa-comment mr-2"></i>{" "}
                </span>
                <span className="ml-2">
                  <i className="fas fa-heart mr-2"></i>
                </span>
              </div>
            </div>
          </div>
          {user ? (
            <div className="card-user">
              <span className="card-user__avatar">
                <img src={user.avatar_url} alt={user.display_name} />
              </span>
              <span className="card-user__name">{user.username}</span>
            </div>
          ) : null}
          <LightBox
            isOpen={isOpenLightBox}
            onClose={() => {
              setOpenLightBox(false);
            }}
            {...image}
          />
        </section>
      </div>
    );
  };
  return renderer();
};

export default ImageCard;
