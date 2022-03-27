import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HorizontalCardComponent from "../../components/horizontal-card";
import cardTypes from "../../types/cardType";

function Motto({ items }) {
  return (
    <div className="innovation-motto-col">
      <h3>Nos valeurs</h3>
      <Row md="3" xs="1" id="innovation-motto-row">
        {items.map((item) => (
          <Col>
            <div id="motto-header">
              <div id="motto-icon">
                <FontAwesomeIcon icon={["fas", `${item.icon}`]} size="2x" />
              </div>
              <h4 className="subtitle">{item.title}</h4>
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
