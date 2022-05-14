import React from "react";
import PropTypes from "prop-types";

function TextBloc({ text, className }) {
  return <p className={className}>{text}</p>;
}

TextBloc.defaultProps = {
  className: "",
};

TextBloc.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TextBloc;
