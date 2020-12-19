import React, { Component } from 'react';
import Card from './Card'

class List extends Component {
  state = {}
  render() {
    return (
      <div className="list col-2 m-3 p-3 rounded">
        <div className="row"><h4>List Title</h4></div>
        <div className="row">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default List;