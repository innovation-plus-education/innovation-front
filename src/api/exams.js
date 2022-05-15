import axios from "../lib/axios";

const getExams = async () => axios.get("/exams").then((res) => res.data);

export const getExamsPage = async () =>
  axios.get("/exam-page").then((res) => res.data);

export default getExams;
