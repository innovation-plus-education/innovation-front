import { getCourse } from "@/api/courses";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";

function Courses() {
  const router = useRouter();
  const { data, isLoading, error } = useQuery(
    ["getCourse", router.query.id],
    () => getCourse(router.query.id)
  );
  if (isLoading) {
    return <span>is loading...</span>;
  }
  if (error) {
    return <span>An error occur during fetching...</span>;
  }
  return (
    <Container>
      <h3>course</h3>
    </Container>
  );
}

export default Courses;
