import React, { useEffect, useState } from 'react'
import ListOptions from '../ListOptions'
import Card from '../Card'
import CardEdit from '../CardEdit'
import AddButton from '../AddButton'
import { nanoid } from 'nanoid'
import * as types from '@monorepo/backend/types'
import styles from './index.module.scss'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'

type Props = {
  data: types.List
  onDeleteList: () => void
}

function List({ data, onDeleteList }: Props) {
  const [title, setTitle] = useState('')
  const [cards, setCards] = useState<types.Card[]>([])

  useEffect(() => {
    setTitle(data.title)
    setCards(data.cards)
  }, [])

  const handleChangeListName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setTitle(event.target.value)
  }

  const handleAddCard = () =>
    setCards([...cards, { _id: nanoid(), content: 'somecontent' }])

  const handleDeleteCard = (cardId: string) => () =>
    setCards(cards.filter((card) => card._id !== cardId))

  return (
    <div className={styles.list}>
      <ListHeader title={title} />
      <ListContent {...{ cards, handleDeleteCard, handleAddCard }} />
    </div>
  )
}

function ListHeader({ title }: { title: string }) {
  return (
    <div className={styles.listHeader}>
      <a href="/#">{title}</a>
    </div>
  )
}

function ListContent({
  cards,
  handleDeleteCard,
  handleAddCard,
}: {
  cards: types.Card[]
  handleDeleteCard: (cardId: string) => () => void
  handleAddCard: () => void
}) {
  return (
    <div className={styles.listContent}>
      {cards.map((card) => (
        <Card
          key={card._id}
          data={card}
          onDeleteCard={handleDeleteCard(card._id)}
        />
      ))}

      <AddButton onClick={handleAddCard} />
    </div>
  )
}

export default List
