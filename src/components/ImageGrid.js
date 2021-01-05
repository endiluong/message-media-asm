import React, { Component } from "react";
import "./ImageGrid.css";
import "./ImageCard";
import { connect } from "react-redux";
import ImageCard from "./ImageCard";
import { loadImages } from "../actions";

class ImageGrid extends Component {
  renderImageToImageCard = () => {
    const images = this.props.images.map((image) => (
      <ImageCard image={image} key={image.id} />
    ));

    return images;
  };

  render() {
    return (
      <div className="container-fluid pt-3">
        <div className="row">{this.renderImageToImageCard()}</div>
        {/* TODO: remove for scroll down load */}
        <div className="button-box">
          <button onClick={this.props.loadImages} className="btn btn-primary">
            Fetch Images
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
