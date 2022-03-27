import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function Banner({ description, title }) {
  return (
    <div className="innovation-banner-row">
      <div className="innovation-banner">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="innovation-banner-logo">
        <Card className="bg-dark text-white">
          <Card.Img
            src="/logo/innovation-plus-banner.png"
            alt="Card image"
            height={300}
            width={600}
          />
        </Card>
      </div>
    </div>
  );
}

Banner.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Banner;
