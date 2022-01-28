import { createContext } from "react";
import { ListProps } from "../List";
interface BoardContextProps {
  listing: Array<ListProps>;
  move: (from: number, to: number) => void;
}

export default createContext<BoardContextProps>({} as BoardContextProps);
