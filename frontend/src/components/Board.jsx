import { useEffect, useState } from "react";
import List from "./List";
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
//     id: 1,
//     title: "some list",
//     cards: [
//       {
//         id: 1,
//         content: "some content",
//       },
//     ],
//   },
// ];

function Board(props) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    // Grab data from backend
    const lists = [];

    for (const list of SEED_DATA) {
      const newList = { id: nanoid(), title: list.title, cards: [] };
      for (const card of list.cards) {
        newList.cards.push({
          id: nanoid(),
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
        id: nanoid(),
        title: "some list",
        cards: [],
      },
    ]);
  };

  const handleDeleteList = (listId) => () =>
    setLists(lists.filter((list) => list.id !== listId));

  const handleChangeListName = (listId) => (event) => {
    event.preventDefault();
    setLists(
      lists.map((list) =>
        list.id === listId ? { ...list, title: event.target.value } : list
      )
    );
  };

  const handleAddCard = (listId) => () => {
    setLists(
      lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: [...list.cards, { id: nanoid(), content: "somecontent" }],
            }
          : list
      )
    );
  };

  const handleDeleteCard = (listId) => (cardId) => () => {
    setLists(
      lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: list.cards.filter((card) => card.id !== cardId),
            }
          : list
      )
    );
  };

  const handleEditCard = (listId) => (cardId) => (event) => {
    event.preventDefault();

    setLists(
      lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: list.cards.map((card) =>
                card.id === cardId
                  ? { ...card, content: event.target.value }
                  : card
              ),
            }
          : list
      )
    );
  };

  return (
    <div className="board">
      {lists.map((list) => (
        <List
          key={list.id}
          data={list}
          onDeleteList={handleDeleteList(list.id)}
          onChangeListName={handleChangeListName(list.id)}
          onAddCard={handleAddCard(list.id)}
          onDeleteCard={handleDeleteCard(list.id)}
          onEditCard={handleEditCard(list.id)}
        />
      ))}
      <div className="list-wrapper">
        <a href="#" className="add-new-list" onClick={handleAddList}>
          Add list
        </a>
      </div>
    </div>
  );
}

export default Board;
