import PropTypes from "prop-types";

const cardTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
};
export default cardTypes;
