import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Row } from "react-bootstrap";
import cardTypes from "@/types/cardType";
import getMediaUrl from "@/utils/getMediaUrl";
import CircleImg from "@/components/commons/circle-img";
import TextBloc from "@/components/commons/text-boc";

function NavigationBloc({ items: { items, title } }) {
  return (
    <Container className="nb-container">
      <h3>{title}</h3>
      <Row xs={1} md={4} className="nb-row">
        {items &&
          items.map((item) => (
            <Col>
              <div className="nb-column">
                <div className="nb-image">
                  <CircleImg
                    className="nb-image"
                    src={getMediaUrl(item.image)}
                    alt={item.title}
                  />
                </div>
                <div className="nb-text-bloc">
                  <h4>{item.title}</h4>
                  <TextBloc className="nb-paragraph" text={item.description} />
                  <Button variant="innovation-dark">En savoir plus</Button>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
NavigationBloc.propTypes = {
  items: PropTypes.arrayOf(cardTypes).isRequired,
};
export default NavigationBloc;
