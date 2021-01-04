import { useEffect, useState, Fragment } from "react";
import CardOptions from "./CardOptions";

function Card({ data, onDeleteCard }) {
  const [content, setContent] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setContent(data.content);
  }, []);

  const handleEditCard = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  return (
    <a
      className="card"
      href="#"
      onMouseEnter={() => setIsHovering(!isHovering)}
      onMouseLeave={() => setIsHovering(!isHovering)}
    >
      <div className="card-content">{content}</div>
      {isHovering && <CardOptions onDeleteCard={onDeleteCard} />}
    </a>
  );
}

export default Card;
