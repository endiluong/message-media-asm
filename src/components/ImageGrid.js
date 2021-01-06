import React, { useState } from "react";
import "./ImageGrid.scss";
import "./ImageCard";
import { connect } from "react-redux";
import ImageCard from "./ImageCard";
import { loadImages } from "../actions";
import debounce from "lodash/debounce";

const ImageGrid = (props) => {
  const [page, setPage] = useState(null);
  const { isLoading, images, error } = props;

  const handleScrollDown = () => {
    const { scrollHeight, scrollTop, clientHeight } = page;
    if (clientHeight + scrollTop === scrollHeight) {
      handlePagination();
    }
  };

  const handlePagination = () => {
    const { loadImages } = props;
    loadImages();
  };

  const renderImageToImageCard = () => {
    const imageCardUIList = images.map((image) => (
      <ImageCard image={image} key={image.id} />
    ));
    return imageCardUIList;
  };

  const renderLoader = () => <div class="progress-line"></div>;

  const renderError = () => {
    return (
      <div className="row d-flex flex-column justify-content-center align-items-center p-3">
        <h5 className="text-danger">{error.message}</h5>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </button>
      </div>
    );
  };

  const renderer = () => {
    return (
      <div>
        {error ? (
          renderError()
        ) : (
          <div
            ref={(page) => {
              setPage(page);
            }}
            className="image-grid container-fluid pt-3"
            onScroll={debounce(handleScrollDown, 100, {
              leading: true,
              trailing: true,
            })}
          >
            <div className="row">{renderImageToImageCard()}</div>
            {isLoading ? renderLoader() : null}
          </div>
        )}
      </div>
    );
  };
  return renderer();
};

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
