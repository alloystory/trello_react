import { useEffect, useState } from "react";
import ListOptions from "./ListOptions";
import Card from "./Card";
import CardEdit from "./CardEdit";
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
    <div className="board--list-wrap">
      <div className="list">
        <div className="list--header">
          <a href="#" className="list--title">
            {title}
          </a>
          <ListOptions onDeleteList={onDeleteList} />
        </div>

        <div className="list--content">
          {cards.map((card) => (
            <Card
              key={card._id}
              data={card}
              onDeleteCard={handleDeleteCard(card._id)}
            />
          ))}

          <CardEdit />

          {/* <a href="#" className="card add-new-card" onClick={handleAddCard}>
            Add card
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default List;
