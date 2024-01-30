import React, { useState } from "react";
import Button from "./Button";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   State Hook (Hooks are out of the box functions from JS libaries)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No items detected</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
            <Button
              onClick={() => {
                onSelectItem(item);
              }}
            >
              Info
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
