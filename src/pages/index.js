import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { getHomepageComponents } from "@/api/index";
import Banner from "@/components/commons/banner";
import NavigationBloc from "@/modules/navigation-bloc";
import Motto from "@/modules/motto";
import InfoBloc from "@/modules/info-bloc";

// eslint-disable-next-line react/prop-types
export default function HomePage({ homepageComponents }) {
  const {
    data: {
      data: {
        attributes: { mottos, categories, banner, info_bloc: infoBloc },
      },
    },
  } = useQuery("homepage", getHomepageComponents, {
    initialData: homepageComponents,
  });
  return (
    <>
      <Banner
        image={banner.image}
        description={banner.description}
        title={banner.title}
      />
      <Container>
        <InfoBloc item={infoBloc} />
        <Motto items={mottos} />
        <NavigationBloc items={categories} />
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const result = await getHomepageComponents();
  return { props: { homepageComponents: result } };
}
