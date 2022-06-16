import { getExam } from "@/api/exams";
import TextBloc from "@/components/commons/text-boc";
import getDataAttribute from "@/utils/getDataAttributes";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useQuery } from "react-query";

function Exam() {
  const router = useRouter();
  const { data, isLoading } = useQuery(["getExam", router.query.id], () =>
    getExam(router.query.id)
  );
  if (isLoading) {
    return <span>is loading...</span>;
  }
  const { courses, date, description, location, name } = getDataAttribute(
    data.data
  );
  return (
    <Container>
      <Row>
        <Col md="2">
          <h5>Related courses</h5>
          <ListGroup variant="flush">
            {courses.data.map((course) => (
              <ListGroup.Item variant="innovation-primary" action>
                {course.attributes.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md="10">
          <h3>{name}</h3>
          <TextBloc text={description} markdown />
          <span>{location}</span>
          <span>{moment(date).format("DD/MM/YYYY h:m")}</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Exam;
