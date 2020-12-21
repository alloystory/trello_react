import React, { Component } from 'react';
import List from './List'

class Board extends Component {
  state = {
    lists: [
      {
        id: 1,
        title: "List 1",
        cards: [
          {
            id: 1,
            content: "Some Card Content"
          },
          {
            id: 2,
            content: "More content"
          },
          {
            id: 3,
            content: "A very looooooooooooooooooooooooooooooooong content"
          }
        ]
      },
      {
        id: 2,
        title: "List 2",
        cards: [
          {
            id: 1,
            content: "Some Card Content"
          },
          {
            id: 2,
            content: "A very looooooooooooooooooooooooooooooooong content"
          }
        ]
      },
      {
        id: 3,
        title: "List 3",
        cards: [
          {
            id: 1,
            content: "More content"
          },
          {
            id: 2,
            content: "A very looooooooooooooooooooooooooooooooong content"
          }
        ]
      },
      {
        id: 4,
        title: "List 4",
        cards: [
          {
            id: 1,
            content: "Some Card Content"
          },
          {
            id: 2,
            content: "More content"
          }
        ]
      },
      {
        id: 5,
        title: "List 5",
        cards: [
          {
            id: 1,
            content: "Some Card Content"
          },
          {
            id: 2,
            content: "More content"
          },
          {
            id: 3,
            content: "A very looooooooooooooooooooooooooooooooong content"
          },
          {
            id: 4,
            content: "A very HAHHAHAHAA content"
          }
        ]
      }
    ]
  }

  render() {
    const listItems = this.state.lists.map(list =>
      <List
        key={list.id}
        title={list.title}
        cards={list.cards} 
      />
    )

    return (
      <div className="board">
        {listItems}
        <div className="list-wrapper">
          <a href="#" className="add-new-list">Add list</a>
        </div>
      </div>
    );
  }
}

export default Board;