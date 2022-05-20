import React from "react";
import PropTypes from "prop-types";

function UpComingExams({ data }) {
  return <h4>{data}</h4>;
}

UpComingExams.propTypes = {
  data: PropTypes.string.isRequired,
};
export default UpComingExams;
