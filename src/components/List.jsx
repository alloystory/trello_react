import React from "react";
import Card from "./Card";

function List(props) {
  return (
    <div className="list-wrapper">
      <div className="list">
        <div className="list-header">
          <strong>{props.data.title}</strong>
        </div>
        <div className="list-content">
          {props.data.cards.map((card) => (
            <Card key={card.id} data={card} />
          ))}
          <a href="#" className="add-new-card">
            Add card
          </a>
        </div>
      </div>
    </div>
  );
}

export default List;
