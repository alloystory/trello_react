import React, { useEffect, useState } from 'react'
import ListOptions from './ListOptions'
import Card from './Card'
import CardEdit from './CardEdit'
import AddButton from './AddButton'
import { nanoid } from 'nanoid'
import * as types from '@monorepo/backend/types'

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
    <div className="board--list-wrap">
      <div className="list">
        <div className="list--header">
          <a href="/#" className="text-title">
            {title}
          </a>
          <ListOptions onDeleteList={onDeleteList} />
        </div>

        <div className="list--content">
          {cards.map((card) => (
            <Card
              key={card._id}
              data={card}
              onDeleteCard={handleDeleteCard(card._id)}
            />
          ))}

          {/* <CardEdit /> */}

          <AddButton />
        </div>
      </div>
    </div>
  )
}

export default List
