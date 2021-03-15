import React, { useEffect, useState, Fragment } from 'react'
import CardOptions from './CardOptions'
import * as types from '@monorepo/backend/types'

type Props = {
  data: types.Card
  onDeleteCard: () => void
}

function Card({ data, onDeleteCard }: Props) {
  const [content, setContent] = useState('')
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setContent(data.content)
  }, [])

  const handleEditCard = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setContent(event.target.value)
  }

  return (
    <button
      className="card"
      onMouseEnter={() => setIsHovering(!isHovering)}
      onMouseLeave={() => setIsHovering(!isHovering)}
    >
      <div className="card--content">{content}</div>
      {/* {isHovering && <CardOptions onDeleteCard={onDeleteCard} />} */}
    </button>
  )
}

export default Card
