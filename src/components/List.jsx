import React from "react";
import Card from "./Card";

function List(props) {
  const { onChangeListName, onAddCard, onDeleteCard } = props;
  const { title, cards } = props.data;

  return (
    <div className="list-wrapper">
      <div className="list">
        <div className="list-header">
          <input type="text" value={title} onChange={onChangeListName} />
        </div>
        <div className="list-content">
          {cards.map((card) => (
            <Card
              key={card.id}
              data={card}
              onDeleteCard={onDeleteCard(card.id)}
            />
          ))}
          <a href="#" className="add-new-card" onClick={onAddCard}>
            Add card
          </a>
        </div>
      </div>
    </div>
  );
}

export default List;
