import React, { Component } from 'react';
import List from './List'

class Lists extends Component {
  state = {}
  render() {
    return (
      <div className="lists row">
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

export default Lists;