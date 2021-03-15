// @ts-nocheck

import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

function CardEdit(props) {
  const [value, setValue] = useState('')

  return (
    <div className="card-editor-wrapper">
      <TextareaAutosize
        minRows={2}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="card card-editor"
      />

      <div className="card-editor-actions">
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  )
}

export default CardEdit
