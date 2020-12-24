import React from "react";
import Card from "./Card";

function List(props) {
  const { id, title, cards } = props.data;

  return (
    <div className="list-wrapper">
      <div className="list">
        <div className="list-header">
          <input
            type="text"
            name={id}
            value={title}
            onChange={props.onChangeListName}
          />
        </div>
        <div className="list-content">
          {cards.map((card) => (
            <Card key={card.id} data={card} />
          ))}
          <a
            href="#"
            className="add-new-card"
            name={id}
            onClick={props.onAddCard}
          >
            Add card
          </a>
        </div>
      </div>
    </div>
  );
}

export default List;
