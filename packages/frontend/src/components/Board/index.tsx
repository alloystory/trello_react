import React, { useEffect, useState } from 'react'
import List from '../List'
import AddButton from '../AddButton'
import { nanoid } from 'nanoid'
import * as types from '@monorepo/backend/types'
import styles from './index.module.scss'

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

  const handleAddList = () => {
    setLists([
      ...lists,
      {
        _id: nanoid(),
        title: 'some list',
        cards: [],
      },
    ])
  }

  const handleDeleteList = (listId: string) => () =>
    setLists(lists.filter((list) => list._id !== listId))

  return (
    <div className={styles.board}>
      {lists.map((list) => (
        <div key={list._id} className={styles.boardColumn}>
          <List
            key={list._id}
            data={list}
            onDeleteList={handleDeleteList(list._id)}
          />
        </div>
      ))}

      {/* Add List Button */}
      <div className={styles.boardColumn}>
        <AddButton onClick={handleAddList} />
      </div>
    </div>
  )
}

export default Board
