import { Card } from "components";
import React from "react";
import { MdAdd } from "react-icons/md";

import { Container } from "./styles";

import BoardContext from "../Board/context";

export interface CardsProps {
  id: number;
  content: string;
  labels: [string];
  user: string;
}

export interface ListProps {
  title: string;
  creatable: boolean;
  done: boolean;
  cards: CardsProps[];
}

type Props = {
  data: ListProps;
};

function List({ data: { title, creatable, cards, done } }: Props) {
  return (
    <Container done={done}>
      <header>
        <h2>{title}</h2>
        {creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {cards.map((card: CardsProps, index) => (
          <Card key={card.id} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}

export default List;
