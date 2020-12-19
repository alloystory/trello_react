import React, { Component } from 'react';
import List from './List'

class Lists extends Component {
  state = {}
  render() {
    return (
      <div className="row">
        <List />
        <List />
        <List />
      </div>
    );
  }
}

export default Lists;