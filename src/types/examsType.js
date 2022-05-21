import PropTypes from "prop-types";

export const examType = {
  examName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};
const examsType = PropTypes.arrayOf(PropTypes.shape(examType.isRequired));

export default examsType;
