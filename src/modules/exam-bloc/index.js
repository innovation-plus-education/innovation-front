import React from "react";
import PropTypes from "prop-types";
import { Card, Row } from "react-bootstrap";
import TextBloc from "../../components/text-boc";

function ExamBloc({ examName, location, date, brand }) {
  return (
    <Row md={2} xs={1} className="eb-row">
      <div className="eb-image">
        <img src={brand} alt={examName} />
      </div>
      <Card className="eb-card">
        <Card.Body>
          <Card.Text as="h5">{examName}</Card.Text>
          <Card.Text as="div">
            <Card.Text as="span">Where:</Card.Text>
            <Card.Text>{location}</Card.Text>
          </Card.Text>
          <Card.Text as="div">
            <Card.Text as="span">When:</Card.Text>
            <Card.Text>{date}</Card.Text>
          </Card.Text>
          <div className="link-btn">
            <Card.Link href="#">Learn more</Card.Link>
            <Card.Link href="#">Courses</Card.Link>
          </div>
        </Card.Body>
      </Card>
      <TextBloc />
    </Row>
  );
}

ExamBloc.propTypes = {
  examName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};
export default ExamBloc;
