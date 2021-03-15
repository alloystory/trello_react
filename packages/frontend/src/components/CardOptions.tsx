import { useState } from 'react'
import { ReactComponent as EllipsisIcon } from '../assets/more.svg'

type Props = {
  onDeleteCard: () => void
}

function CardOptions({ onDeleteCard }: Props) {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <div className="more-options">
      <a
        href="/#"
        onClick={() => setShowOptions(!showOptions)}
        className="btn-show-option"
      >
        <EllipsisIcon />
      </a>

      {showOptions && (
        <ul>
          <li className="more-option" onClick={onDeleteCard}>
            Delete Card
          </li>
        </ul>
      )}
    </div>
  )
}

export default CardOptions
