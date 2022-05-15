import moment from "moment";
import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import getExams, { getExamsPage } from "../../src/api/exams";
import TextBloc from "../../src/components/text-boc";
import ExamBloc from "../../src/modules/exam-bloc";

// eslint-disable-next-line react/prop-types
export default function ExamsPage({ examsPage }) {
  const {
    isLoading,
    isError,
    data: result,
    error,
  } = useQuery("getExams", getExams);

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
        <TextBloc text={resume}/>
      </div>

      {result.data.map(
        ({
          attributes: { name: examName, location, date, resume: examResume },
        }) => (
          <ExamBloc
            examName={examName}
            location={location}
            date={moment(date).format("DD/MM/YYYY")}
            resume={examResume}
          />
        )
      )}
    </Container>
  );
}

export async function getServerSideProps() {
  const result = await getExamsPage();
  return { props: { examsPage: result } };
}