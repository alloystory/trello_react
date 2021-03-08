// @ts-nocheck

import { useEffect, useState } from "react";
import List from "./List";
import AddButton from "./AddButton";
import { nanoid } from "nanoid";

const SEED_DATA = [
  {
    title: "List 1",
    cards: ["Content 1", "Content 2", "LOOOOOOOOOOOOOOOOOONG Content 3"],
  },
  {
    title: "List 2",
    cards: ["Content 1", "LOOOOOOOOOOOOOOOOOONG Content 3"],
  },
  {
    title: "List 3",
    cards: [
      "Content 1",
      "Content 2",
      "LOOOOOOOOOOOOOOOOOONG Content 3",
      "Some Content 4",
    ],
  },
];

// lists: [
//   {
//     _id: 1,
//     title: "some list",
//     cards: [
//       {
//         _id: 1,
//         content: "some content",
//       },
//     ],
//   },
// ];

function Board() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    // Grab data from backend
    const lists = [];

    for (const list of SEED_DATA) {
      const newList = { _id: nanoid(), title: list.title, cards: [] };
      for (const card of list.cards) {
        newList.cards.push({
          _id: nanoid(),
          content: card,
        });
      }
      lists.push(newList);
    }

    setLists(lists);
  }, []);

  const handleAddList = () => {
    setLists([
      ...lists,
      {
        _id: nanoid(),
        title: "some list",
        cards: [],
      },
    ]);
  };

  const handleDeleteList = (listId) => () =>
    setLists(lists.filter((list) => list._id !== listId));

  return (
    <div className="board">
      {lists.map((list) => (
        <List
          key={list._id}
          data={list}
          onDeleteList={handleDeleteList(list._id)}
        />
      ))}

      {/* Add List Button */}
      <div className="board--list-wrap">
        <AddButton />
      </div>
    </div>
  );
}

export default Board;
