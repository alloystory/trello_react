import React, { Component } from 'react';
import Card from './Card'

class List extends Component {
  state = {}
  render() {
    return (
      <div className="list col-2 my-3 mx-2 p-3 rounded">
        <h6>List Title</h6>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default List;