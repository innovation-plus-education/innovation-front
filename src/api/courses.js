import axios from "../lib/axios";
import queryWithPopulate, { queryWithFields } from "../lib/qs";

const getCourses = async () => {
  const populate = queryWithPopulate(["activities, sheets"]);
  const fields = queryWithFields(["title"]);
  return axios.get(`/courses?${populate}&${fields}`).then((res) => res.data);
};

export const getCoursePage = async () => {
  const populate = queryWithPopulate(["pageHeader.image"]);
  return axios.get(`/course-page?${populate}`).then((res) => res.data);
};

export default getCourses;
