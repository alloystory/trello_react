import React from 'react';
import Card from './Card'

function List(props) {
  const cardItems = props.cards.map(card =>
    <Card 
      key={card.id}
      content={card.content}
    />
  )

  return (
    <div className="list-wrapper">
      <div className="list">
        <div className="list-header">
          <strong>{props.title}</strong>
        </div>
        <div className="list-content">
          {cardItems}
        </div>
      </div>
    </div>
  );
}

export default List;