import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col } from "react-bootstrap";
import { examType } from "@/types/examsType";
import moment from "moment";
import InnovationIcon from "@/components/commons/innovation-icon";

function ExamComponent({ name, location, date, className, id, resume }) {
  return (
    <Col className={`exam-col-component ${className}`}>
      <Card className="exams-card">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{resume}</Card.Text>
        </Card.Body>
        <Card.Body className="icon-group">
          <Card.Text as="div">
            <InnovationIcon icon="location-arrow" />
            <span>{location}</span>
          </Card.Text>
          <Card.Text as="div">
            <InnovationIcon icon="calendar" type="far" />
            <span>{moment(date).format("DD/MM/YYYY")}</span>
          </Card.Text>
        </Card.Body>
        <div className="eb-link">
          <Button variant="innovation-dark" href={`/exams/${id}`}>
            Voir plus
          </Button>
        </div>
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
