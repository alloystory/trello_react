import * as types from '@monorepo/backend/types'
import React from 'react'
import AddButton from '../AddButton'
import Card from '../Card'
import styles from './index.module.scss'

type Props = {
  title: string
  cards: types.Card[]
  handleDeleteList: () => void
  handleAddCard: () => void
  handleDeleteCard: (cardId: string) => () => void
}

function List({ title, handleDeleteList, ...restProps }: Props) {
  return (
    <div className={styles.list}>
      <ListHeader {...{ title, handleDeleteList }} />
      <ListContent {...restProps} />
    </div>
  )
}

function ListHeader({
  title,
  handleDeleteList,
}: Pick<Props, 'title' | 'handleDeleteList'>) {
  return (
    <div className={styles.listHeader}>
      <a href="/#" onClick={handleDeleteList}>
        {title}
      </a>
    </div>
  )
}

function ListContent({
  cards,
  handleDeleteCard,
  handleAddCard,
}: Pick<Props, 'cards' | 'handleDeleteCard' | 'handleAddCard'>) {
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
