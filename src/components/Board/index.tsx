import { List } from "components";
import React, { useState, useMemo } from "react";
import { loadLists } from "services/api";

import BoardContext from "./context";

import { ListProps } from "../List";
import { Container } from "./styles";

const data = loadLists() as ListProps[];

function Board() {
  const [lists, setLists] = useState(data);

  function move(from: number, to: number) {
    console.log(from, to);
  }

  const listing = useMemo(() => lists, [lists]);

  return (
    <BoardContext.Provider value={{ listing, move }}>
      <Container>
        {lists.map((list: ListProps) => (
          <List key={list.title} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}

export default Board;
