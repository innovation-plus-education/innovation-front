import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Row } from "react-bootstrap";
import cardTypes from "../../types/cardType";

function CardsDisplayer({ items: { items } }) {
  return (
    <Container className="card-display-container">
      <Row xs={1} md={4} className="card-displayer-row">
        {items &&
          items.map((item) => (
            <Col>
              <div className="card-displayer-column">
                <h5>{item.title}</h5>
                <div className="card-displayer-image">
                  <img
                    className="card-displayer-image"
                    src={item.image.data[0].attributes.name}
                    alt={item.title}
                  />
                </div>
                <p className="card-displayer-paragraph">{item.description}</p>
                <Button variant="innovation-dark">En savoir plus</Button>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
CardsDisplayer.propTypes = {
  items: PropTypes.arrayOf(cardTypes).isRequired,
};
export default CardsDisplayer;
