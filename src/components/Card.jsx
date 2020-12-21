import React, { Component } from 'react';

function Card(props) {
  return (
    <a className="card" href="#">
      <div className="card-content">
        {props.content}
      </div>
      <div className="card-status">
        {/* Todo */}
      </div>
    </a>
  );
}

export default Card;