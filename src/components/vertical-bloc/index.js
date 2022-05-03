import React from "react";
import PropTypes from "prop-types";
import { Button, Col } from "react-bootstrap";

function VerticalBloc({ title, description, btnTitle, image, className }) {
  return (
    <Col>
      <div className={`v-b-column ${className}`}>
        {title && <h5>{title}</h5>}
        <div className="v-b-image">
          <img className="v-b-image" src={image} alt={title} />
        </div>
        {description && <p className="v-b-paragraph">{description}</p>}
        {btnTitle && <Button variant="innovation-dark">{btnTitle}</Button>}
      </div>
    </Col>
  );
}

VerticalBloc.defaultProps = {
  description: null,
  btnTitle: null,
  className: "",
};

VerticalBloc.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  btnTitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  className: PropTypes.string
};
export default VerticalBloc;
