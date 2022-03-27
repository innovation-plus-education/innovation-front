import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../src/components/banner";
import CardsDisplayer from "../src/modules/cards-displayer";
import Motto from "../src/modules/motto";

const items = [
  {
    title: "Ecole",
    image: "https://picsum.photos/id/192/200",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    link: "https://www.lipsum.com/",
  },
  {
    title: "Sujet",
    image: "https://picsum.photos/id/180/200",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    link: "https://www.lipsum.com/",
  },
  {
    title: "Blog",
    image: "https://picsum.photos/id/1012/200",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    link: "https://www.lipsum.com/",
  },
  {
    title: "Cours",
    image: "https://picsum.photos/id/4/200/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    link: "https://www.lipsum.com/",
  },
];

const mottos = [
  {
    title: "Travail",
    image: "https://picsum.photos/id/192/200",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sunt in culpa qui officia deserunt mollit anim id est laborum",
    link: "https://www.lipsum.com/",
    icon: "hard-hat",
  },
  {
    title: "Rigueur",
    image: "https://picsum.photos/id/180/200",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sunt in culpa qui officia deserunt mollit anim id est laborum",
    link: "https://www.lipsum.com/",
    icon: "hand-rock",
  },
  {
    title: "Succès",
    image: "https://picsum.photos/id/1012/200",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sunt in culpa qui officia deserunt mollit anim id est laborum",
    link: "https://www.lipsum.com/",
    icon: "thumbs-up",
  },
];
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
export default function Home() {
  return (
    <Container>
      <Banner
        image="https://picsum.photos/id/464/3198/2230"
        description={description}
        title="Welcome to innovation"
      />
      <Motto items={mottos} />
      <CardsDisplayer items={items} />
    </Container>
  );
}
