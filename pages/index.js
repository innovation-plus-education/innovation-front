import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { getHomepageComponents } from "../src/api";
import Banner from "../src/components/banner";
import CardsDisplayer from "../src/modules/cards-displayer";
import Motto from "../src/modules/motto";

export default function HomePage({ homepageComponents }) {
  const {
    data: {
      data: {
        attributes: { mottos, categories, banner },
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
        <Motto items={mottos} />
        <CardsDisplayer items={categories} />
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const result = await getHomepageComponents();
  console.log("**********\n", result);
  return { props: { homepageComponents: result } };
}
