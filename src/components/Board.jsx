import React, { Component } from "react";
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

class Board extends Component {
  state = {
    lists: [],
  };

  componentDidMount() {
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

    console.log(lists);

    this.setState(() => ({ lists: lists }));
  }

  handleAddList = () => {
    this.setState((state) => {
      return {
        lists: [
          ...state.lists,
          {
            id: nanoid(),
            title: "somelist",
            cards: [],
          },
        ],
      };
    });
  };

  handleDeleteList = (listId) => () => {
    this.setState((state) => {
      return { lists: state.lists.filter((list) => list.id !== listId) };
    });
  };

  handleChangeListName = (listId) => (event) => {
    this.setState((state) => {
      return {
        lists: state.lists.map((list) =>
          list.id === listId ? { ...list, title: event.target.value } : list
        ),
      };
    });
  };

  handleAddCard = (listId) => () => {
    this.setState((state) => {
      return {
        lists: state.lists.map((list) =>
          list.id === listId
            ? {
                ...list,
                cards: [
                  ...list.cards,
                  { id: nanoid(), content: "somecontent" },
                ],
              }
            : list
        ),
      };
    });
  };

  handleDeleteCard = (listId) => (cardId) => () => {
    this.setState((state) => {
      return {
        lists: state.lists.map((list) =>
          list.id === listId
            ? {
                ...list,
                cards: list.cards.filter((card) => card.id !== cardId),
              }
            : list
        ),
      };
    });
  };

  render() {
    return (
      <div className="board">
        {this.state.lists.map((list) => (
          <List
            key={list.id}
            data={list}
            onDeleteList={this.handleDeleteList(list.id)}
            onChangeListName={this.handleChangeListName(list.id)}
            onAddCard={this.handleAddCard(list.id)}
            onDeleteCard={this.handleDeleteCard(list.id)}
          />
        ))}
        <div className="list-wrapper">
          <a href="#" className="add-new-list" onClick={this.handleAddList}>
            Add list
          </a>
        </div>
      </div>
    );
  }
}

export default Board;
