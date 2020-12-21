import React, { Component } from 'react';
import List from './List'

class Board extends Component {
  state = {}
  render() {
    return (
      <div className="board">
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    );
  }
}

export default Board;