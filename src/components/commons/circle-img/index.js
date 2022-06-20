import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";

function CircleImg({ src, alt, className, height }) {
  return (
    <Image
      src={src}
      alt={alt}
      roundedCircle
      className={className}
      height={height}
    />
  );
}

CircleImg.defaultProps = {
  className: "",
};
CircleImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CircleImg;
