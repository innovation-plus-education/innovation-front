import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "react-bootstrap";
import TextRawColumns from "@/components/text-row-columns";
import CircleImg from "@/components/circle-img";
import getMediaUrl from "@/utils/getMediaUrl";
import { examType } from "@/types/examsType";

function ExamComponent({ name, location, date, brand, className }) {
  return (
    <Col className="eb-column">
      <Row lg={2} md={2} xs={1} className={className}>
        <CircleImg
          className="eb-image"
          src={getMediaUrl(brand, true)}
          alt={name}
        />
        <div className="eb-card">
          <TextRawColumns className="eb-card-row" value={name} label="Title" />
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

ExamComponent.defaultProps = {
  className: "",
};
ExamComponent.propTypes = {
  ...examType,
  className: PropTypes.string,
};

export default ExamComponent;
