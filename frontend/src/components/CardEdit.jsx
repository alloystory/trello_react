import { useEffect, useState } from "react";

function CardEdit(props) {
  return (
    <a className="card" href="#">
      <div className="card-body">
        <textarea className="card-content"></textarea>
        {/* <textarea
        className="card-content"
        onChange={handleEditCard}
        onInput={(event) => {
          event.target.style.height = "inherit";
          event.target.style.height = `${event.target.scrollHeight}px`;
        }}
        value={content}
      ></textarea> */}

        <div className="card-actions">
          <button>Delete</button>
        </div>
      </div>
    </a>
  );
}

export default CardEdit;
