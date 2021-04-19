import * as types from '@monorepo/backend/types'
import React from 'react'
import AddButton from '../AddButton'
import List from '../List'
import styles from './index.module.scss'

type Props = {
  lists: types.List[]
  handleAddList: () => void
  handleDeleteList: (listId: string) => () => void
}

function Board({ lists, handleAddList, handleDeleteList }: Props) {
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
