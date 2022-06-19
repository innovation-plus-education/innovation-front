import { getExam } from "@/api/exams";
import InnovationIcon from "@/components/commons/innovation-icon";
import TextBloc from "@/components/commons/text-boc";
import getDataAttribute from "@/utils/getDataAttributes";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { Badge, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useQuery } from "react-query";

function Exam() {
  const router = useRouter();
  const { data, isLoading, error } = useQuery(
    ["getExam", router.query.id],
    () => getExam(router.query.id)
  );
  if (isLoading) {
    return <span>is loading...</span>;
  }
  if (error) {
    return <span>An error occur during fetching...</span>;
  }
  const { courses, date, description, location, name, topics } =
    getDataAttribute(data.data);
  return (
    <Container>
      <Row>
        <Col md="9">
          <h3 className="exam-title">{name}</h3>
          <div className="exam-description">
            <TextBloc text={description} markdown />
          </div>
          <div className="exam-information">
            <div className="information-row">
              <InnovationIcon icon="location-arrow" />
              <span>{location}</span>
            </div>
            <div className="information-row">
              <InnovationIcon icon="calendar" type="far" />
              <span>{moment(date).format("DD/MM/YYYY h:m")}</span>
            </div>
          </div>
        </Col>
        <Col md="3" className="side-info">
          <div className="side-info-list">
            <h5>Related courses</h5>
            <ListGroup variant="flush">
              {courses.data.map((course) => (
                <ListGroup.Item variant="innovation-primary" action>
                  {course.attributes.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div className="side-info-list">
            <h5>Related topics</h5>
            <div className="topics-badge">
              {topics.data.map((topic) => (
                <Badge bg="innovation-success" pill>
                  {topic.attributes.name}
                </Badge>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Exam;
