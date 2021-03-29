import React, { useEffect, useState } from 'react'
import ListOptions from '../ListOptions'
import Card from '../Card'
import CardEdit from '../CardEdit'
import AddButton from '../AddButton'
import { nanoid } from 'nanoid'
import * as types from '@monorepo/backend/types'
import styles from './index.module.css'

type Props = {
  data: types.List
  onDeleteList: () => void
}

function ListHeader({ title }: { title: string }) {
  return (
    <div className={styles.listHeader}>
      <a href="/#" className="text-title">
        {title}
      </a>
    </div>
  )
}

function ListContent({
  cards,
  handleDeleteCard,
}: {
  cards: types.Card[]
  handleDeleteCard: (cardId: string) => () => void
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

      <AddButton />
    </div>
  )
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
      <ListContent cards={cards} handleDeleteCard={handleDeleteCard} />
    </div>
  )
}

export default List
