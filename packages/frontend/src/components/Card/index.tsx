import React, { useEffect, useState, Fragment } from 'react'
import CardOptions from '../CardOptions'
import * as types from '@monorepo/backend/types'
import styles from './index.module.css'

type Props = {
  data: types.Card
  onDeleteCard: () => void
}

function Card({ data, onDeleteCard }: Props) {
  const [content, setContent] = useState('')

  useEffect(() => {
    setContent(data.content)
  }, [])

  const handleEditCard = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setContent(event.target.value)
  }

  return <button className={styles.card}>{content}</button>
}

export default Card
