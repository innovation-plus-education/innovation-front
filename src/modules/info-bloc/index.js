import React from "react";
import { Container, Row } from "react-bootstrap";
import cardTypes from "../../types/cardType";

function infoBloc({ item: { item } }) {
  return (
    <Container className="info-bloc-container">
      <Row xs={1} md={4} className="info-bloc-row">
        <div className="d-f-c">
          <h5>{item.title}</h5>
          <p className="info-bloc-paragraph">{item.description}</p>
        </div>
        <div className="info-bloc-image">
          <img
            className="info-bloc-image"
            src={`${process.env.NEXT_PUBLIC_ASSET_URL}${item.image.data.attributes.formats.thumbnail.url}`}
            alt={item.title}
          />
        </div>
      </Row>
    </Container>
  );
}
infoBloc.propTypes = {
  items: cardTypes.isRequired,
};
export default infoBloc;
