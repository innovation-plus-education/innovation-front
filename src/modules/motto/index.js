import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import cardTypes from "@/types/cardType";
import TextBloc from "@/components/commons/text-boc";
import Title from "@/components/commons/title";
import getMediaUrl from "@/utils/getMediaUrl";
import CircleImg from "@/components/commons/circle-img";

function Motto({ items: { items, headline, titleBackground } }) {
  return (
    <div className="motto-col">
      <Title
        backgroundImage={getMediaUrl(titleBackground)}
        className="title-light"
      >
        <h3>{headline}</h3>
      </Title>
      <Row md="3" xs="1" id="motto-row">
        {items.map((item) => (
          <Col className="motto-card">
            <div className="motto-header">
              <CircleImg
                src={getMediaUrl(item.media)}
                alt={item.title}
                height={100}
              />
              <h3 className="subtitle">{item.title}</h3>
            </div>
            <TextBloc className="motto-paragraph" text={item.description} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

Motto.propTypes = {
  items: PropTypes.arrayOf(cardTypes).isRequired,
};
export default Motto;
