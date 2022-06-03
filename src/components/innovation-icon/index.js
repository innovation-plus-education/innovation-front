import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function InnovationIcon({ icon, size, className, type }) {
  return (
    <FontAwesomeIcon
      className={className}
      icon={[type, icon]}
      size={`${size}x`}
    />
  );
}

InnovationIcon.defaultProps = {
  className: "",
  type: "fas",
  size: 1,
};

InnovationIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  type: PropTypes.oneOf(["far", "fas"]),
};

export default InnovationIcon;
