import React from "react";
import cardTypes from "@/types/cardType";
import getMediaUrl from "@/utils/getMediaUrl";
import { Image } from "react-bootstrap";

function infoBloc({ item: { item } }) {
  return (
    <div className="info-bloc-row">
      <div className="d-f-c">
        <h5>{item.title}</h5>
        <p className="info-bloc-paragraph">{item.description}</p>
      </div>
      <Image
        className="info-bloc-image"
        src={getMediaUrl(item.image)}
        alt={item.title}
        fluid
      />
    </div>
  );
}
infoBloc.propTypes = {
  items: cardTypes.isRequired,
};
export default infoBloc;
