import examsType from "@/types/examsType";
import React from "react";
import { Carousel } from "react-bootstrap";
import ExamComponent from "../exam";

function ExamMobileComponent({ exams }) {
  return (
    <Carousel slide className="em-carousel" variant="dark" controls={false}>
      {exams.map(({ attributes: { name, location, date, brand } }) => (
        <Carousel.Item>
          <ExamComponent
            name={name}
            brand={brand}
            location={location}
            date={date}
          />
          <Carousel.Caption className="em-column">
            <div className="eb-card" />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
ExamMobileComponent.propTypes = {
  exams: examsType.isRequired,
};
export default ExamMobileComponent;
