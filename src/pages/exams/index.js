import moment from "moment";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import getExams, { getExamsPage, getUpComingExams } from "@/api/exams";
import TextBloc from "@/components/text-boc";
import ExamBloc from "@/modules/exam-bloc";
import getMediaUrl from "@/utils/getMediaUrl";

// eslint-disable-next-line react/prop-types
export default function ExamsPage({ examsPage }) {
  const {
    isLoading,
    isError,
    data: result,
    error,
  } = useQuery("getExams", getExams);

  const upcomingExams = useQuery("getUpComingExams", getUpComingExams);

  const {
    data: {
      data: {
        attributes: { title, resume },
      },
    },
  } = useQuery("examsPage", getExamsPage, {
    initialData: examsPage,
  });

  if (isLoading) {
    return <small>Loading...</small>;
  }

  if (isError) {
    return <small>Error: {error.message}</small>;
  }
  return (
    <Container>
      <div className="ep-header">
        <h2>{title}</h2>
        <TextBloc text={resume} />
      </div>
      <Row lg={3} md={1} xs={1}>
        {result.data.map(
          ({
            attributes: {
              name: examName,
              location,
              date,
              resume: examResume,
              id,
              brand,
            },
          }) => (
            <ExamBloc
              key={id}
              examName={examName}
              location={location}
              date={moment(date).format("DD/MM/YYYY")}
              resume={examResume}
              brand={getMediaUrl(brand, true)}
            />
          )
        )}
      </Row>
    </Container>
  );
}

export async function getServerSideProps() {
  const result = await getExamsPage();
  return { props: { examsPage: result } };
}
