import { useState } from "react";

function ListOptions(props) {
  const { onDeleteList } = props;
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
          <li className="more-option" onClick={onDeleteList}>
            Delete List
          </li>
        </ul>
      )}
    </div>
  );
}

export default ListOptions;
