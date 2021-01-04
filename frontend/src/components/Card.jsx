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
      {/* <div className="card-content"> */}
      <a href="#">{content}</a>
      {/* </div> */}

      <div className="card-actions">
        <a href="#" onClick={onDeleteCard}>
          <i class="far fa-trash-alt"></i>
        </a>
      </div>
    </a>
  );
}

export default Card;
