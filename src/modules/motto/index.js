import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import cardTypes from "@/types/cardType";
import InnovationIcon from "@/components/innovation-icon";
import TextBloc from "@/components/text-boc";

function Motto({ items: { items, headline } }) {
  return (
    <div className="motto-col">
      <h3>{headline}</h3>
      <Row md="3" xs="1" id="motto-row">
        {items.map((item) => (
          <Col>
            <div className="motto-card">
              <div className="motto-header">
                <InnovationIcon
                  icon={`${item.icon}`}
                  className="motto-icon"
                  size={2}
                />
                <h4 className="subtitle">{item.title}</h4>
              </div>
              <TextBloc text={item.description} />
            </div>
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
