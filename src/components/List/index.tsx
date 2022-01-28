import { Card } from "components";
import React from "react";
import { MdAdd } from "react-icons/md";

import BoardContext from "../Board/context";
import { Container } from "./styles";

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
  index: number;
};

function List({
  data: { title, creatable, cards, done },
  index: listIndex,
}: Props) {
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
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}

export default List;
