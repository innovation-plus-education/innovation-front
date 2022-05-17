import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

function ExamBloc({ examName, location, date, brand }) {
  return (
    <Col className="eb-column">
      <Row md={2} xs={1} className="eb-row">
        <div className="eb-image">
          <img src={brand} alt={examName} />
        </div>
        <div className="eb-card">
          <div className="eb-card-row">
            <Col md={2} xs={2}>
              <span className="eb-label">Title:</span>
            </Col>
            <Col md={10} xs={10}>
              <span className="eb-value">{examName}</span>
            </Col>
          </div>
          <div className="eb-card-row">
            <Col md={2} xs={2}>
              <span className="eb-label">Where:</span>
            </Col>
            <Col md={10} xs={10}>
              <span className="eb-value">{location}</span>
            </Col>
          </div>
          <div className="eb-card-row">
            <Col md={2} xs={2}>
              <span className="eb-label">When:</span>
            </Col>
            <Col md={10} xs={10}>
              <span className="eb-value">{date}</span>
            </Col>
          </div>
          <div className="eb-link">
            <a href="/">Learn more</a>
            <a href="/">Courses</a>
          </div>
        </div>
      </Row>
    </Col>
  );
}

ExamBloc.propTypes = {
  examName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};
export default ExamBloc;
