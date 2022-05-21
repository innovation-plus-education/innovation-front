import moment from "moment";
import axios from "../lib/axios";
import queryWithPopulate, { customQuery, queryWithFields } from "../lib/qs";

const getExams = async () => {
  const populate = queryWithPopulate(["brand"]);
  const fields = queryWithFields(["id", "name", "location", "date"]);
  const filters = customQuery({
    filters: {
      date: {
        $gte: moment.now().toString(),
      },
    },
  });
  return axios
    .get(`/exams?${populate}&${fields}&${filters}`)
    .then((res) => res.data);
};

export const getUpComingExams = async () => {
  const query = {
    filters: {
      date: {
        $gte: moment.now().toString(),
      },
    },
    populate: ["brand"],
    sort: ["date:desc"],
    pagination: {
      limit: 3,
    },
  };
  const params = customQuery(query);
  return axios.get(`/exams?${params}`).then((res) => res.data);
};

export const getExamsPage = async () =>
  axios.get("/exam-page").then((res) => res.data);

export default getExams;
