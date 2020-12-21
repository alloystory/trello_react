import React, { Component } from 'react';

class Card extends Component {
  state = {}
  render() {
    return (
      <button className="btn btn-block btn-light text-left border-bottom">
        Some Card Content
      </button>
    );
  }
}

export default Card;