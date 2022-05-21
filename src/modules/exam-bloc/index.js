import React from "react";
import { Row } from "react-bootstrap";
import examsType from "@/types/examsType";
import moment from "moment";
import ExamComponent from "./component";

function ExamBloc({ exams, upComingExams }) {
  return (
    <div>
      <Row lg={4} md={3} xs={1}>
        {upComingExams.map(
          ({ attributes: { name, location, date, brand } }) => (
            <ExamComponent
              name={name}
              location={location}
              date={moment(date).format("DD/MM/YYYY")}
              brand={brand}
              className="upcoming-exam"
            />
          )
        )}
      </Row>
      <Row lg={2} md={1} xs={1} className="ep-row">
        {exams.map(({ attributes: { name, location, date, brand } }) => (
          <ExamComponent
            name={name}
            location={location}
            date={moment(date).format("DD/MM/YYYY")}
            brand={brand}
            className="eb-row"
          />
        ))}
      </Row>
    </div>
  );
}

ExamBloc.propTypes = {
  exams: examsType.isRequired,
  upComingExams: examsType.isRequired,
};
export default ExamBloc;
