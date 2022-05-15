import React from "react";
import PropTypes from "prop-types";
import { Card, Row } from "react-bootstrap";
import TextBloc from "../../components/text-boc";

function ExamBloc({ examName, location, date, resume }) {
  return (
    <Row md={2} xs={1} className="eb-row">
      <Card className="eb-card" bg="innovation-dark">
        <Card.Header>{examName}</Card.Header>
        <Card.Body>
          <Card.Text>Where: {location}</Card.Text>
          <Card.Text>When: {date}</Card.Text>
          <Card.Link href="#">Learn more</Card.Link>
          <Card.Link href="#">Our courses for this exams</Card.Link>
        </Card.Body>
      </Card>
      <div className="eb-text-bloc">
        <TextBloc text={resume} markdown className="eb-text-bloc-paragraph" />
      </div>
    </Row>
  );
}

ExamBloc.propTypes = {
  examName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
};
export default ExamBloc;
