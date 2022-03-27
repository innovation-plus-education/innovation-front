import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import cardTypes from "../../types/cardType";

function HorizontalCardComponent({ description, className }) {
  return (
    <Card className={`innovation-h-card ${className}`}>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

HorizontalCardComponent.propTypes = {
  ...cardTypes,
  className: PropTypes.string,
};

HorizontalCardComponent.defaultProps = {
  className: "",
};

export default HorizontalCardComponent;
