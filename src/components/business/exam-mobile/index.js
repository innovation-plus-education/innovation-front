import CircleImg from "@/components/commons/circle-img";
import TextRawColumns from "@/components/commons/text-row-columns";
import examsType from "@/types/examsType";
import getMediaUrl from "@/utils/getMediaUrl";
import React from "react";
import { Button, Carousel } from "react-bootstrap";

function ExamMobileComponent({ exams }) {
  return (
    <Carousel slide controls className="em-carousel" variant="dark">
      {exams.map(({ attributes: { name, location, date, brand } }) => (
        <Carousel.Item>
          <CircleImg
            className="d-block w-50"
            src={getMediaUrl(brand)}
            alt="First slide"
          />
          <Carousel.Caption className="em-column">
            <div className="eb-card">
              <TextRawColumns
                className="eb-card-row"
                value={name}
                label="Title"
              />
              <TextRawColumns
                className="eb-card-row"
                value={location}
                label="where"
              />
              <TextRawColumns
                className="eb-card-row"
                value={date}
                label="when"
              />
              <div className="eb-link">
                <Button href="/" variant="outline-innovation-primary" size="sm">
                  Learn more
                </Button>
                <Button href="/" variant="outline-innovation-primary" size="sm">
                  Courses
                </Button>
              </div>
            </div>
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
