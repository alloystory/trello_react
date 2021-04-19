import * as types from '@monorepo/backend/types'
import React, { useState } from 'react'
import AddButton from '../AddButton'
import Card from '../Card'
import styles from './index.module.scss'
import { ReactComponent as EllipsisIcon } from '../../assets/more.svg'
import Button from '../Button'
import Divider from '../Divider'

type Props = {
  title: string
  cards: types.Card[]
  handleDeleteList: () => void
  handleAddCard: () => void
  handleDeleteCard: (cardId: string) => () => void
  handleChangeListName: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function List({ title, handleDeleteList, ...restProps }: Props) {
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
      <ListOptions />
    </div>
  )
}

function ListOptions() {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <div className={styles.listOptionsContainer}>
      <Button
        isSquare
        className={styles.listOptionsButton}
        onClick={() => setShowOptions((showOptions) => !showOptions)}
      >
        <EllipsisIcon />
      </Button>

      {showOptions && (
        <div className={styles.listOptions}>
          <div className={styles.listOptionsTitle}>
            <div>Actions</div>
            <Divider className={styles.listOptionsDivider} />
          </div>
          <div className={styles.listOptionsRow}>Delete List</div>
          <div className={styles.listOptionsRow}>Delete List</div>
          <div className={styles.listOptionsRow}>Delete List</div>
          <div className={styles.listOptionsRow}>Delete List</div>
        </div>
      )}
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
