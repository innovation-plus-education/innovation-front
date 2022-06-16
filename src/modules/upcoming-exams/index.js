import React from "react";
import { Row } from "react-bootstrap";
import examsType from "@/types/examsType";
import moment from "moment";
import useMediaSize from "@/hooks/useMediaSize";
import ExamComponent from "@/components/business/exam";
import ExamMobileComponent from "@/components/business/exam-mobile";

function UpCommingExams({ upComingExams }) {
  const isDesktop = useMediaSize();
  const centerBloc =
    upComingExams.length < 4 ? "justify-content-md-center" : "";
  return (
    <Row
      lg={4}
      md={2}
      xs={1}
      className={`upcoming-exams-raw equal ${centerBloc} ep-raw`}
    >
      {isDesktop ? (
        upComingExams.map(
          ({ attributes: { name, location, date, resume }, id }) => (
            <ExamComponent
              name={name}
              location={location}
              date={moment(date).format("DD/MM/YYYY")}
              resume={resume}
              className="upcoming-exams"
              id={id}
              key={id}
            />
          )
        )
      ) : (
        <ExamMobileComponent exams={upComingExams} />
      )}
    </Row>
  );
}

UpCommingExams.propTypes = {
  upComingExams: examsType.isRequired,
};
export default UpCommingExams;
