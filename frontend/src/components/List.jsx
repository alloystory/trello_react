import { useEffect, useState } from "react";
import Card from "./Card";
import { nanoid } from "nanoid";

function List({ data, onDeleteList }) {
  const [title, setTitle] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setTitle(data.title);
    setCards(data.cards);
  }, []);

  const handleChangeListName = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleAddCard = () =>
    setCards([...cards, { _id: nanoid(), content: "somecontent" }]);

  const handleDeleteCard = (cardId) => () =>
    setCards(cards.filter((card) => card._id !== cardId));

  return (
    <div className="list-wrapper">
      <div className="list">
        <div className="list-header">
          <input type="text" value={title} onChange={handleChangeListName} />
          <button onClick={onDeleteList}>Delete</button>
        </div>
        <div className="list-content">
          {cards.map((card) => (
            <Card
              key={card._id}
              data={card}
              onDeleteCard={handleDeleteCard(card._id)}
            />
          ))}
          <a href="#" className="add-new-card" onClick={handleAddCard}>
            Add card
          </a>
        </div>
      </div>
    </div>
  );
}

export default List;
