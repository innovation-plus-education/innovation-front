import React from "react";
import { Row } from "react-bootstrap";
import examsType from "@/types/examsType";
import moment from "moment";
import ExamComponent from "@/components/business/exam";

function ExamBloc({ exams }) {
  const centerBloc = exams.length < 4 ? "justify-content-md-center" : "";
  return (
    <Row lg={4} md={2} xs={1} className={`eb-raw equal ${centerBloc} ep-raw`}>
      {exams.map(({ attributes: { name, location, date }, id }) => (
        <ExamComponent
          name={name}
          location={location}
          date={moment(date).format("DD/MM/YYYY")}
          className="eb-exams"
          id={id}
          key={id}
        />
      ))}
    </Row>
  );
}

ExamBloc.propTypes = {
  exams: examsType.isRequired,
};
export default ExamBloc;
