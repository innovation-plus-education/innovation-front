import qs from "qs";

const queryWithPopulate = (relations) =>
  qs.stringify(
    {
      populate: [...relations],
    },
    {
      encodeValuesOnly: true,
    }
  );

export const queryWithFields = (fields) =>
  qs.stringify(
    {
      fields: [...fields],
    },
    {
      encodeValuesOnly: true,
    }
  );

export const customQuery = (query) =>
  qs.stringify(
    {
      ...query,
    },
    {
      encodeValuesOnly: true,
    }
  );
export default queryWithPopulate;
