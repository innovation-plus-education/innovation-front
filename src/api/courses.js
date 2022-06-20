import axios from "../lib/axios";
import queryWithPopulate, {
  queryWithFields,
  queryWithPopulateAll,
} from "../lib/qs";

const getCourses = async () => {
  const populate = queryWithPopulate(["activities, sheets"]);
  const fields = queryWithFields(["title"]);
  return axios.get(`/courses?${populate}&${fields}`).then((res) => res.data);
};

export const getCourse = async (id) => {
  const populate = queryWithPopulateAll();
  const fields = queryWithFields(["title", "description"]);
  return axios
    .get(`/courses/${id}?${populate}&${fields}`)
    .then((res) => res.data);
};

export const getCoursePage = async () => {
  const populate = queryWithPopulate(["pageHeader.image"]);
  return axios.get(`/course-page?${populate}`).then((res) => res.data);
};

export default getCourses;
