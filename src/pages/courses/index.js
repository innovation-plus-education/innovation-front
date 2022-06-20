/* eslint-disable react/prop-types */
import getCourses, { getCoursePage } from "@/api/courses";
import CircleImg from "@/components/commons/circle-img";
import TextBloc from "@/components/commons/text-boc";
import Title from "@/components/commons/title";
// import useMediaSize from "@/hooks/useMediaSize";
import getMediaUrl from "@/utils/getMediaUrl";
import React from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";
import { useQuery } from "react-query";

function Courses({ coursePage }) {
  const {
    data: {
      data: {
        attributes: {
          pageHeader: { image, description, title: pageTitle },
        },
      },
    },
  } = useQuery("coursePage", getCoursePage, {
    initialData: coursePage,
  });
  const { isLoading, isError, data, error } = useQuery("getExams", getCourses);

  if (isLoading) {
    return <small>Loading...</small>;
  }

  if (isError) {
    return <small>Error: {error.message}</small>;
  }
  return (
    <Container>
      <Row className="courses-page-header">
        <Stack direction="horizontal" gap={2}>
          <CircleImg src={getMediaUrl(image)} />
          <div>
            <Title className="courses-page-header-title">
              <h3>{pageTitle}</h3>
            </Title>
            <TextBloc text={description} />
          </div>
        </Stack>
      </Row>
      <Row className="courses-page-body" md="4" xs="1">
        {data.data.map(({ attributes: { title, activities }, id }) => (
          <Col>
            <Card className="courses-page-cards">
              <Card.Header>{title}</Card.Header>
              <Card.Body>
                <Card.Title>Related activites</Card.Title>
                <Card.Text as="div">
                  {activities.data.map(
                    ({ attributes: { title: activityTitle } }) => (
                      <Badge bg="innovation-light" pill as="a" href="/">
                        {activityTitle}
                      </Badge>
                    )
                  )}
                </Card.Text>
              </Card.Body>
              <Card.Link as="div">
                <Button
                  variant="outline-innovation-light"
                  href={`/courses/${id}`}
                >
                  view more
                </Button>
              </Card.Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Courses;
export async function getServerSideProps() {
  const result = await getCoursePage();
  return { props: { coursePage: result } };
}
