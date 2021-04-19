import * as types from '@monorepo/backend/types'
import { nanoid } from 'nanoid'
import React, { useCallback, useEffect, useState } from 'react'
import ListComponent from './component'

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

  const handleAddCard = useCallback(
    () =>
      setCards((cards) => [
        ...cards,
        { _id: nanoid(), content: 'somecontent' },
      ]),
    []
  )

  const handleDeleteCard = useCallback(
    (cardId: string) => () =>
      setCards((cards) => cards.filter((card) => card._id !== cardId)),
    []
  )

  return (
    <ListComponent
      {...{
        title,
        cards,
        handleDeleteList: onDeleteList,
        handleAddCard,
        handleDeleteCard,
      }}
    />
  )
}

export default List
