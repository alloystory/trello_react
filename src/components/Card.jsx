import React, { Component } from 'react';

function Card(props) {
  return (
    <div className="card">
      <div className="card-content">
        {props.content}
      </div>
    </div>
  );
}

export default Card;