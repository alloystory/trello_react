import React, { Component } from "react";
import List from "./List";
import { nanoid } from "nanoid";

class Board extends Component {
  state = {
    // lists: [
    //   {
    //     title: "List 1",
    //     cards: [
    //       { content: "Some Card Content" },
    //       { content: "More content" },
    //       { content: "A very looooooooooooooooooooooooooooooooong content" },
    //     ],
    //   },
    //   {
    //     title: "List 2",
    //     cards: [
    //       { content: "Some Card Content" },
    //       { content: "A very looooooooooooooooooooooooooooooooong content" },
    //     ],
    //   },
    //   {
    //     title: "List 3",
    //     cards: [
    //       { content: "More content" },
    //       { content: "A very looooooooooooooooooooooooooooooooong content" },
    //     ],
    //   },
    //   {
    //     title: "List 4",
    //     cards: [{ content: "Some Card Content" }, { content: "More content" }],
    //   },
    //   {
    //     title: "List 5",
    //     cards: [
    //       { content: "Some Card Content" },
    //       { content: "More content" },
    //       { content: "A very looooooooooooooooooooooooooooooooong content" },
    //       { content: "A very HAHHAHAHAA content" },
    //     ],
    //   },
    // ],
    lists: [
      {
        id: 1,
        title: "List 1",
        cards: [
          {
            id: 1,
            content: "Some Card Content",
          },
          {
            id: 2,
            content: "More content",
          },
          {
            id: 3,
            content: "A very looooooooooooooooooooooooooooooooong content",
          },
        ],
      },
      {
        id: 2,
        title: "List 2",
        cards: [
          {
            id: 1,
            content: "Some Card Content",
          },
          {
            id: 2,
            content: "A very looooooooooooooooooooooooooooooooong content",
          },
        ],
      },
      {
        id: 3,
        title: "List 3",
        cards: [
          {
            id: 1,
            content: "More content",
          },
          {
            id: 2,
            content: "A very looooooooooooooooooooooooooooooooong content",
          },
        ],
      },
      {
        id: 4,
        title: "List 4",
        cards: [
          {
            id: 1,
            content: "Some Card Content",
          },
          {
            id: 2,
            content: "More content",
          },
        ],
      },
      {
        id: 5,
        title: "List 5",
        cards: [
          {
            id: 1,
            content: "Some Card Content",
          },
          {
            id: 2,
            content: "More content",
          },
          {
            id: 3,
            content: "A very looooooooooooooooooooooooooooooooong content",
          },
          {
            id: 4,
            content: "A very HAHHAHAHAA content",
          },
        ],
      },
    ],
  };

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
