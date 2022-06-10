import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import InnovationIcon from "../innovation-icon";

function TextRawColumns({ label, value, className, icon }) {
  return (
    <Row className={`text-raw-col equal ${className}`}>
      <Col md={4} xs={4} className="text-raw-label-col">
        {icon && (
          <div className="text-raw-icon">
            <InnovationIcon icon={icon} type="far" />
          </div>
        )}
        <span className="text-raw-label">{label}:</span>
      </Col>
      <Col md={8} xs={8} className="text-raw-value-col">
        <span className="text-raw-value">{value}</span>
      </Col>
    </Row>
  );
}

TextRawColumns.defaultProps = {
  className: "",
  icon: null,
};
TextRawColumns.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
};
export default TextRawColumns;
