import React from "react";

function Card(props) {
  const { onDeleteCard, onEditCard } = props;
  const { content } = props.data;

  return (
    <a className="card" href="#">
      <div className="card-body">
        {/* <span
          className="card-content"
          contentEditable={true}
          onChange={onEditCard}
        >
          {content}
        </span> */}
        <textarea
          className="card-content"
          // rows="1"
          onChange={onEditCard}
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
