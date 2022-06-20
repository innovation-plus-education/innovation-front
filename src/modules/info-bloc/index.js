import React from "react";
import cardTypes from "@/types/cardType";
import getMediaUrl from "@/utils/getMediaUrl";
import { Image } from "react-bootstrap";

function infoBloc({ item: { item } }) {
  return (
    <div className="info-bloc-row">
      {item && (
        <>
          <div className="d-f-c">
            <h5>{item.title}</h5>
            <p className="info-bloc-paragraph">{item.resume}</p>
          </div>
          <Image
            className="info-bloc-image"
            src={getMediaUrl(item.media)}
            alt={item.title}
            fluid
          />
        </>
      )}
    </div>
  );
}
infoBloc.propTypes = {
  item: cardTypes.isRequired,
};
export default infoBloc;
