import * as types from '@monorepo/backend/types'
import { nanoid } from 'nanoid'
import React, { useCallback, useEffect, useState } from 'react'
import BoardComponent from './component'

const sampleData: types.GetBoardResponse = {
  lists: [
    {
      _id: 'list-1',
      title: 'List 1',
      cards: [
        {
          _id: 'list-1-card-1',
          content: 'content 1',
        },
        {
          _id: 'list-1-card-2',
          content: 'content 2',
        },
        {
          _id: 'list-1-card-3',
          content: 'long long long long long long long long long content 3',
        },
      ],
    },
    {
      _id: 'list-2',
      title: 'List 2',
      cards: [
        {
          _id: 'list-2-card-1',
          content: 'content 1',
        },
        {
          _id: 'list-2-card-3',
          content: 'long long long long long long long long long content 3',
        },
      ],
    },
    {
      _id: 'list-3',
      title: 'List 3',
      cards: [
        {
          _id: 'list-3-card-1',
          content: 'content 1',
        },
        {
          _id: 'list-3-card-2',
          content: 'content 2',
        },
        {
          _id: 'list-3-card-3',
          content: 'long long long long long long long long long content 3',
        },
        {
          _id: 'list-3-card-4',
          content: 'long long long long long long long long long content 3',
        },
      ],
    },
  ],
}

function Board() {
  const [lists, setLists] = useState<types.List[]>([])

  useEffect(() => setLists(sampleData.lists), [])

  const handleAddList = useCallback(() => {
    setLists((lists) => [
      ...lists,
      {
        _id: nanoid(),
        title: 'some list',
        cards: [],
      },
    ])
  }, [])

  const handleDeleteList = useCallback(
    (listId: string) => () =>
      setLists((lists) => lists.filter((list) => list._id !== listId)),
    []
  )

  return (
    <BoardComponent
      {...{
        lists,
        handleAddList,
        handleDeleteList,
      }}
    />
  )
}

export default Board
