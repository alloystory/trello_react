import React from "react";

function Card(props) {
  const { onDeleteCard } = props;
  const { content } = props.data;

  return (
    <a className="card" href="#" onClick={onDeleteCard}>
      <div className="card-content">{content}</div>
      <div className="card-status">{/* Todo */}</div>
    </a>
  );
}

export default Card;
