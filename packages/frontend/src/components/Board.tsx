import { useEffect, useState } from 'react'
import List from './List'
import AddButton from './AddButton'
import { nanoid } from 'nanoid'
import * as types from '../../../backend/types'

function Board() {
  const [lists, setLists] = useState<types.List[]>([])

  useEffect(() => setLists(types.sampleData.lists), [])

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
    <div className="board">
      {lists.map((list) => (
        <List
          key={list._id}
          data={list}
          onDeleteList={handleDeleteList(list._id)}
        />
      ))}

      {/* Add List Button */}
      <div className="board--list-wrap">
        <AddButton />
      </div>
    </div>
  )
}

export default Board
