import * as types from '@monorepo/backend/types'
import { nanoid } from 'nanoid'
import React, { useCallback, useEffect, useState } from 'react'
import { CardData } from '../Card'
import ListComponent from './component'

type Props = {
  data: types.List
  onDeleteList: () => void
}

function List({ data, onDeleteList }: Props) {
  const [title, setTitle] = useState('')
  const [cards, setCards] = useState<CardData[]>([])

  useEffect(() => {
    setTitle(data.title)
    setCards(data.cards)
  }, [])

  const handleChangeListName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setTitle(event.target.value)
    },
    []
  )

  const handleAddCard = useCallback(
    () =>
      setCards((cards) => [
        ...cards,
        { _id: nanoid(), content: '', isNew: true },
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
        handleChangeListName,
      }}
    />
  )
}

export default List
