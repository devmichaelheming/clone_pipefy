import { List } from "components";
import produce from "immer";
import React, { useState, useMemo } from "react";
import { loadLists } from "services/api";

import { ListProps } from "../List";
import BoardContext from "./context";
import { Container } from "./styles";

const data = loadLists() as ListProps[];

function Board() {
  const [lists, setLists] = useState(data);

  const value = useMemo(
    () => ({
      lists,
      move: (from: number, to: number) => {
        console.log(`From: ${from}`);
        console.log(`To: ${to}`);
        // setLists(produce(lists, draft => {
        //   const dragged = draft[]
        // }))
      },
    }),
    [lists],
  );

  return (
    <BoardContext.Provider value={value}>
      <Container>
        {lists.map((list: ListProps, index) => (
          <List key={list.title} index={index} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}

export default Board;
