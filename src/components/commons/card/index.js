import React from "react";
import { Card } from "react-bootstrap";
import cardTypes from "../../types/cardType";

function CardComponent({ title, description, link, imageUrl }) {
  return (
    <Card className="innovation-card">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        {link && <Card.Link>{link}</Card.Link>}
      </Card.Body>
    </Card>
  );
}

CardComponent.propTypes = cardTypes;

export default CardComponent;
