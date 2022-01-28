import React, { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";

import BoardContext from "../Board/context";

import { CardsProps } from "../List";
import { Container, Label } from "./styles";

interface ItemDragProps {
  indexItem: {
    index: number;
  };
}

interface DragProps {
  item: ItemDragProps;
  type: string;
  collect: any;
}

interface IsDraggingProps {
  isDragging(): void;
}

type Props = {
  data: CardsProps;
  index: number;
};

function Card({ data: { id, content, labels, user }, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { move, listing } = useContext(BoardContext);

  const [{ isDragging }, dragRef]: any = useDrag(
    (): DragProps => ({
      item: {
        indexItem: {
          index,
        },
      },
      type: "CARD",
      collect: (monitor: IsDraggingProps) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [],
  );

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item: ItemDragProps, monitor) {
      const { indexItem } = item;
      const draggedIndex = indexItem.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex) {
        return;
      }

      const targetSize = ref.current?.getBoundingClientRect();
      const targetCenter = targetSize?.bottom;
      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset!.y - targetSize!.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter!) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter!) {
        return;
      }

      move(draggedIndex, targetIndex);
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {labels.map((label) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{content}</p>
      {user ? <img src={user} alt="avatar logo" /> : ""}
    </Container>
  );
}

export default Card;
