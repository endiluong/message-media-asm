import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageCard from "../ImageCard";
import { loadImages } from "../../actions";
import debounce from "lodash/debounce";
import "./style.scss";

const ImageGrid = () => {
  const [page, setPage] = useState(null);
  const [isNextPage, setNextPage] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);

  const images = useSelector((state) => state.images);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch, isNextPage]);

  const handleScrollDown = () => {
    const { scrollHeight, scrollTop, clientHeight } = page;
    if (clientHeight + scrollTop === scrollHeight) {
      setNextPage(true);
    } else setNextPage(false);
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

export default ImageGrid;
