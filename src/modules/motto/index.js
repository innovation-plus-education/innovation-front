import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import HorizontalCardComponent from "../../components/horizontal-card";
import cardTypes from "../../types/cardType";
import InnovationIcon from "../../components/innovation-icon";

function Motto({ items: { items, headline } }) {
  return (
    <div className="innovation-motto-col">
      <h2>{headline}</h2>
      <Row md="3" xs="1" id="innovation-motto-row">
        {items.map((item) => (
          <Col>
            <div className="motto-header">
              <div className="motto-icon">
                <InnovationIcon icon={`${item.icon}`} size={2} />
              </div>
              <h5 className="subtitle">{item.title}</h5>
            </div>
            <HorizontalCardComponent
              description={item.description}
              link={item.link}
              icon={item.icon}
            />
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
