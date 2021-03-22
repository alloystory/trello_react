import React, { useEffect, useState, Fragment } from 'react'
import CardOptions from '../CardOptions'
import * as types from '@monorepo/backend/types'
import styles from './index.module.scss'

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
      className={styles.card}
      onMouseEnter={() => setIsHovering(!isHovering)}
      onMouseLeave={() => setIsHovering(!isHovering)}
    >
      {/* <div className={styles['card--content']}>{content}</div> */}
      {/* {isHovering && <CardOptions onDeleteCard={onDeleteCard} />} */}
    </button>
  )
}

export default Card
