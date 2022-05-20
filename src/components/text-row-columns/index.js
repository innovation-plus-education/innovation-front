import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

function TextRawColumns({ label, value, className }) {
  return (
    <div className={`text-raw-col ${className}`}>
      <Col md={2} xs={2}>
        <span className="eb-label">{label}:</span>
      </Col>
      <Col md={10} xs={10} className="eb-col-value">
        <span className="eb-value">{value}</span>
      </Col>
    </div>
  );
}

TextRawColumns.defaultProps = {
  className: "",
};
TextRawColumns.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default TextRawColumns;
