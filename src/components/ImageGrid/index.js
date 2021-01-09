import { useState, useCallback } from "react";
import ImageCard from "../ImageCard";
import debounce from "lodash/debounce";
import "./style.scss";

const ImageGrid = (props) => {
  const [page, setPage] = useState(null);
  const { isLoading = false, images = [], error = null, onPageChange } = props;

  const handleScrollDown = useCallback(() => {
    const { scrollHeight, scrollTop, clientHeight } = page;
    if (clientHeight + scrollTop === scrollHeight) {
      onPageChange(true);
    } else onPageChange(false);
  }, [onPageChange, page]);

  const renderImageToImageCard = () => {
    const imageCardUIList = images?.map((image) => (
      <ImageCard image={image} key={image.id} />
    ));
    return imageCardUIList;
  };

  const renderLoader = () => <div className="progress-line"></div>;

  const renderError = () => {
    return (
      <div
        id="error-box"
        className="row d-flex flex-column justify-content-center align-items-center p-3"
      >
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
      <>
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
      </>
    );
  };
  return renderer();
};

export default ImageGrid;
