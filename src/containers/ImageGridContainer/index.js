import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadImages } from "../../actions";
import ImageGrid from "../../components/ImageGrid";

const ImageGridContainer = () => {
  const dispatch = useDispatch();
  const [isNextPage, setNextPage] = useState(false);
  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch, isNextPage]);

  const isLoading = useSelector((state) => state.isLoading);

  const images = useSelector((state) => state.images);
  const error = useSelector((state) => state.error);

  const handlePageChange = (isPageChange) => {
    setNextPage(isPageChange);
  };

  const renderer = () => {
    return (
      <ImageGrid
        images={images}
        isLoading={isLoading}
        error={error}
        onPageChange={handlePageChange}
      />
    );
  };
  return renderer();
};

export default ImageGridContainer;
