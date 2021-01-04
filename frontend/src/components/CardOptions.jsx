import { useState } from "react";

function CardOptions(props) {
  const { onDeleteCard } = props;
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="card-options">
      <a
        href="#"
        onClick={() => setShowOptions(!showOptions)}
        className="card-show-option"
      >
        <i class="fas fa-ellipsis-h"></i>
      </a>

      {showOptions && (
        <ul>
          <li className="card-option" onClick={onDeleteCard}>
            Delete Card
          </li>
        </ul>
      )}
    </div>
  );
}

export default CardOptions;
