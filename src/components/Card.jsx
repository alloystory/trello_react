import React from "react";

function Card(props) {
  const { onDeleteCard } = props;
  const { content } = props.data;

  return (
    <a className="card" href="#">
      <div className="card-body">
        <div className="card-content">{content}</div>
        <div className="card-actions">
          <button onClick={onDeleteCard}>Delete</button>
        </div>
      </div>
    </a>
  );
}

export default Card;
