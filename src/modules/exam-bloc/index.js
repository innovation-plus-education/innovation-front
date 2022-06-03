import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import examsType from "@/types/examsType";
import moment from "moment";
import useMediaSize from "@/hooks/useMediaSize";
import TextRawColumns from "@/components/text-row-columns";
import ExamComponent from "./component";
import ExamMobileComponent from "./mobile-component";

function ExamBloc({ exams, upComingExams }) {
  const isDesktop = useMediaSize();
  return (
    <div>
      <Row
        lg={4}
        md={2}
        xs={1}
        className="justify-content-md-center eb-upcoming-exams-raw equal"
      >
        {isDesktop ? (
          upComingExams.map(({ attributes: { name, location, date } }) => (
            <Col>
              <Card className="eb-upcoming-exams-card">
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text as="div">
                    <TextRawColumns
                      label="Where"
                      value={location}
                      icon="compass"
                    />
                  </Card.Text>
                  <Card.Text as="div">
                    <TextRawColumns
                      label="When"
                      value={moment(date).format("DD/MM/YYYY")}
                      icon="calendar"
                    />
                  </Card.Text>
                  <div className="eb-link">
                    <Button variant="outline-innovation-primary" size="sm">
                      Voir plus
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <ExamMobileComponent exams={upComingExams} />
        )}
      </Row>
      <Row lg={4} md={2} xs={1} className="ep-row eb-upcoming-exams-raw equal">
        {exams.map(({ attributes: { name, location, date } }) => (
          <Col>
            <Card className="eb-upcoming-exams-card">
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text as="div">
                  <TextRawColumns
                    label="Where"
                    value={location}
                    icon="compass"
                  />
                </Card.Text>
                <Card.Text as="div">
                  <TextRawColumns
                    label="When"
                    value={moment(date).format("DD/MM/YYYY")}
                    icon="calendar"
                  />
                </Card.Text>
                <div className="eb-link">
                  <Button variant="outline-innovation-primary" size="sm">
                    Voir plus
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
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
