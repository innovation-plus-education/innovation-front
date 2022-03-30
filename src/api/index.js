import axiosClient from "../lib/axios";

export const getHomepageComponents = async () => {
  return axiosClient
    .get("/homepage", {
      params: {
        populate: "mottos.items,categories.items,categories.items.image,banner.image",
      },
    })
    .then((res) => res.data);
};

export default getHomepageComponents;
