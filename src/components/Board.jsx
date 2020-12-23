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

    this.setState(() => ({ lists: lists }));
  }

  handleAddList = () => {
    this.setState((state) => ({
      lists: [
        ...state.lists,
        {
          id: nanoid(),
          title: "somelist",
          cards: [],
        },
      ],
    }));
  };

  handleChangeListName = (event) => {
    const newLists = this.state.lists.map((list) => {
      if (list.id == event.target.name)
        return { ...list, title: event.target.value };
      else return list;
    });
    this.setState(() => ({
      lists: newLists,
    }));
  };

  render() {
    return (
      <div className="board">
        {this.state.lists.map((list) => (
          <List
            key={list.id}
            data={list}
            onChangeListName={this.handleChangeListName}
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
