import { useState } from 'react'
import { ReactComponent as EllipsisIcon } from '../assets/more.svg'

interface Props {
  onDeleteList: () => void
}

function ListOptions(props: Props) {
  const { onDeleteList } = props
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
          <li className="more-option" onClick={onDeleteList}>
            Delete List
          </li>
        </ul>
      )}
    </div>
  )
}

export default ListOptions
