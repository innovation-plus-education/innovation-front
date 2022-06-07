import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col } from "react-bootstrap";
import TextRawColumns from "@/components/commons/text-row-columns";
import { examType } from "@/types/examsType";
import moment from "moment";

function ExamComponent({ name, location, date, className, id }) {
  return (
    <Col className={`exam-col-component ${className}`}>
      <Card className="exams-card">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text as="div">
            <TextRawColumns label="Where" value={location} icon="compass" />
          </Card.Text>
          <Card.Text as="div">
            <TextRawColumns
              label="When"
              value={moment(date).format("DD/MM/YYYY")}
              icon="calendar"
            />
          </Card.Text>
          <div className="eb-link">
            <Button
              variant="outline-innovation-dark"
              size="sm"
              href={`/exam/${id}`}
            >
              Voir plus
            </Button>
          </div>
        </Card.Body>
      </Card>
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
