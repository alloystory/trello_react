import { useState } from "react";

function CardOptions(props) {
  const { onDeleteCard } = props;
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="more-options">
      <a
        href="#"
        onClick={() => setShowOptions(!showOptions)}
        className="btn-show-option"
      >
        <i class="fas fa-ellipsis-h"></i>
      </a>

      {showOptions && (
        <ul>
          <li className="more-option" onClick={onDeleteCard}>
            Delete Card
          </li>
        </ul>
      )}
    </div>
  );
}

export default CardOptions;