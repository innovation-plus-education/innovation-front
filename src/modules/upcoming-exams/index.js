import React from "react";
import { Row } from "react-bootstrap";
import examsType from "@/types/examsType";
import moment from "moment";
import useMediaSize from "@/hooks/useMediaSize";
import ExamComponent from "../exam-bloc/component";
import ExamMobileComponent from "../exam-bloc/mobile-component";

function ExamBloc({ exams, upComingExams }) {
  const isDesktop = useMediaSize();
  const centerBloc = exams.length < 4 ? "justify-content-md-center" : "";
  return (
    <div>
      <Row
        lg={4}
        md={2}
        xs={1}
        className={`eb-upcoming-exams-raw equal ${centerBloc} ep-raw`}
      >
        {isDesktop ? (
          upComingExams.map(({ attributes: { name, location, date } }) => (
            <ExamComponent
              name={name}
              location={location}
              date={moment(date).format("DD/MM/YYYY")}
              className="upcoming-exams"
            />
          ))
        ) : (
          <ExamMobileComponent exams={upComingExams} />
        )}
      </Row>
      <Row lg={4} md={2} xs={1} className={`eb-raw equal ${centerBloc} ep-raw`}>
        {exams.map(({ attributes: { name, location, date } }) => (
          <ExamComponent
            name={name}
            location={location}
            date={moment(date).format("DD/MM/YYYY")}
            className="eb-exams"
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
