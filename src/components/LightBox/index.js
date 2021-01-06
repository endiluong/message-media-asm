import React from "react";
import { GIPHY_IMAGE_JPG, GIPHY_IMAGE_FULL } from "../../constant";

import "./style.scss";

const LightBox = (props) => {
  const closeLightBox = () => {
    props.onClose();
  };

  const renderer = () => {
    const { isOpen, images, title } = props;

    return images && isOpen ? (
      <div
        className={`lightbox ${isOpen ? "show" : ""}`}
        onClick={closeLightBox}
      >
        <div className="lightbox-wrapper">
          <picture className="lightbox-image">
            <source srcSet={images[GIPHY_IMAGE_FULL].url} type="image/gif" />
            <img src={images[GIPHY_IMAGE_JPG].url} alt={title} />
          </picture>
        </div>
      </div>
    ) : null;
  };

  return renderer();
};

export default LightBox;
