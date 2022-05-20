import React from "react";
import PropTypes from "prop-types";

function CircleImg({ src, alt, className }) {
  return (
    <div className={`rounded-img ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

CircleImg.defaultProps = {
  className: "",
};
CircleImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CircleImg;
