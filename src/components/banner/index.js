/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import getMediaUrl from "../../utils/getMediaUrl";

function Banner({ description, title, image }) {
  return (
    <div className="innovation-banner-row">
      <Card className="bg-dark text-white">
        <Card.Img src={getMediaUrl(image)} alt="Card image" height={500} />
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
