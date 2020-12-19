import React, { Component } from 'react';

class List extends Component {
  state = {}
  render() {
    return (
      <div className="col">
        <div className="row"><h4>Header</h4></div>
        <div className="row">
          cards...
        </div>
      </div>
    );
  }
}

export default List;