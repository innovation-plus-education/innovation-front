import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { getHomepageComponents } from "../src/api";
import Banner from "../src/components/banner";
import CardsDisplayer from "../src/modules/cards-displayer";
import Motto from "../src/modules/motto";
import InfoBloc from "../src/modules/info-bloc";

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
        <CardsDisplayer items={categories} />
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const result = await getHomepageComponents();
  return { props: { homepageComponents: result } };
}
