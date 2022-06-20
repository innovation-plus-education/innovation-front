import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "react-bootstrap";
import cardTypes from "@/types/cardType";
import getMediaUrl from "@/utils/getMediaUrl";
import CircleImg from "@/components/commons/circle-img";
import TextBloc from "@/components/commons/text-boc";
import Title from "@/components/commons/title";

function NavigationBloc({ items: { items, title, titleBackground } }) {
  return (
    <div className="nb-container">
      <Title
        backgroundImage={getMediaUrl(titleBackground)}
        className="title-light"
      >
        <h3>{title}</h3>
      </Title>
      <Row xs={1} md={2} lg={4} className="nb-row">
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
    </div>
  );
}
NavigationBloc.propTypes = {
  items: PropTypes.arrayOf(cardTypes).isRequired,
};
export default NavigationBloc;
