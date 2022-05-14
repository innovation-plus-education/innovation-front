import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function Banner({ description, title, image }) {
  return (
    <div className="innovation-banner-row">
      <Card className="bg-dark text-white">
        <Card.Img
          src={`http://innovation.api.local${image.data[0].attributes.url}`}
          alt="Card image"
          height={500}
        />
        {/* <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.ImgOverlay> */}
      </Card>
    </div>
  );
}

Banner.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Banner;
