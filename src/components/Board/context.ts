import { createContext } from "react";

import { ListProps } from "../List";

interface BoardContextProps {
  lists: Array<ListProps>;
  move: (from: number, to: number) => void;
}

export default createContext<BoardContextProps>({} as BoardContextProps);
