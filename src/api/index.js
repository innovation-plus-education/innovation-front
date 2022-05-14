import axiosClient from "../lib/axios";

export const getHomepageComponents = async () => {
  return axiosClient
    .get("/homepage", {
      params: {
        populate:
          "mottos.items,categories.items,categories.items.image,banner.image,info_bloc.item.image",
      },
    })
    .then((res) => res.data);
};

export const getLayouts = async () => {
  return axiosClient
    .get("/global", {
      params: {
        populate: "navbar.homepage.logo,navbar.navigables,footer.columns.links",
      },
    })
    .then((res) => res.data);
};
export default getHomepageComponents;
