import React, { Component } from 'react';
import Card from './Card'

class List extends Component {
  state = {}
  render() {
    return (
      <div className="list-wrapper">
        <div className="list">
          <strong>List Title</strong>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default List;