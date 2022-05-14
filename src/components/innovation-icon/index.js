import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function InnovationIcon({ icon, size, className }) {
  return (
    <FontAwesomeIcon
      className={className}
      icon={["fas", `${icon}`]}
      size={`${size}x`}
    />
  );
}

InnovationIcon.defaultProps = {
  className: "",
};

InnovationIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default InnovationIcon;
