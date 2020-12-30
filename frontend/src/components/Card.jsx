import { useEffect, useState } from "react";

function Card({ data, onDeleteCard }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(data.content);
  }, []);

  const handleEditCard = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  return (
    <a className="card" href="#">
      <div className="card-body">
        <textarea
          className="card-content"
          onChange={handleEditCard}
          onInput={(event) => {
            event.target.style.height = "inherit";
            event.target.style.height = `${event.target.scrollHeight}px`;
          }}
          value={content}
        >
          {/* {document.querySelectorAll(".card-content").forEach((element) => {
            element.style.height = "inherit";
            element.style.height = `${element.scrollHeight}px`;
          })} */}
        </textarea>

        <div className="card-actions">
          <button onClick={onDeleteCard}>Delete</button>
        </div>
      </div>
    </a>
  );
}

export default Card;
