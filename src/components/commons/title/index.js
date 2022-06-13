import React from "react";
import PropTypes from "prop-types";

function Title({ children, className, backgroundImage }) {
  return (
    <div className="title-component">
      {React.cloneElement(children, {
        className,
        style: { "background-image": `url(${backgroundImage})` },
      })}
    </div>
  );
}
Title.defaultProps = {
  backgroundImage: "",
  className: "",
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default Title;
