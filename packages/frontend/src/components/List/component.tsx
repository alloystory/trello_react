import * as types from '@monorepo/backend/types'
import React from 'react'
import AddButton from '../AddButton'
import AdditionalOptionsModal, {
  OptionsActionsMap,
} from '../AdditionalOptionsModal'
import Card from '../Card'
import styles from './index.module.scss'

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
  const options: OptionsActionsMap[] = [
    {
      name: 'Delete List',
      action: () => {
        console.log('delete list')
      },
    },
  ]

  return (
    <div className={styles.listHeader}>
      <a href="/#" onClick={handleDeleteList}>
        {title}
      </a>
      <AdditionalOptionsModal options={options} />
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
