import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import getExams, { getExamsPage, getUpComingExams } from "@/api/exams";
import TextBloc from "@/components/commons/text-boc";
import ExamBloc from "@/modules/exam-bloc";
import dlv from "dlv";
import UpCommingExams from "@/modules/upcoming-exams";

// eslint-disable-next-line react/prop-types
export default function ExamsPage({ examsPage }) {
  const {
    isLoading,
    isError,
    data: examData,
    error,
  } = useQuery("getExams", getExams);
  const exams = dlv(examData, "data");
  const { data: upCommingExamData } = useQuery(
    "getUpComingExams",
    getUpComingExams
  );
  const upComingExams = dlv(upCommingExamData, "data");
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
      <div className="upcoming-exams-bloc">
        <div className="ep-header">
          <h2>{title}</h2>
          <TextBloc text={resume} />
        </div>
        {upComingExams && <UpCommingExams upComingExams={upComingExams} />}
      </div>
      <div className="exams-bloc">
        <div className="ep-header">
          <h2>{title}</h2>
          <TextBloc text={resume} />
        </div>
        {exams && <ExamBloc exams={exams} />}
      </div>
    </Container>
  );
}

export async function getServerSideProps() {
  const result = await getExamsPage();
  return { props: { examsPage: result } };
}
