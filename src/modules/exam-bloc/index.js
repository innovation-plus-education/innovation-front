import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "react-bootstrap";
import TextRawColumns from "@/components/text-row-columns";
import CircleImg from "@/components/circle-img";

function ExamBloc({ examName, location, date, brand }) {
  return (
    <Col className="eb-column">
      <Row lg={2} md={2} xs={1} className="eb-row">
        <CircleImg className="eb-image" src={brand} alt={examName} />
        <div className="eb-card">
          <TextRawColumns
            className="eb-card-row"
            value={examName}
            label="Title"
          />
          <TextRawColumns
            className="eb-card-row"
            value={location}
            label="where"
          />
          <TextRawColumns className="eb-card-row" value={date} label="when" />
          <div className="eb-link">
            <Button href="/" variant="outline-innovation-primary" size="sm">
              Learn more
            </Button>
            <Button href="/" variant="outline-innovation-primary" size="sm">
              Courses
            </Button>
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
