import React, { useEffect, useState, Fragment, useCallback } from 'react'
import * as types from '@monorepo/backend/types'
import styles from './index.module.scss'
import AdditionalOptionsModal, {
  OptionsActionsMap,
} from '../AdditionalOptionsModal'
import TextareaAutosize from 'react-textarea-autosize'

type Props = {
  data: types.Card
  onDeleteCard: () => void
}

export default function Card({ data, onDeleteCard }: Props) {
  const [content, setContent] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    setContent(data.content)
  }, [])

  const handleOnClick = useCallback(() => {
    setIsEditing(true)
  }, [])

  const handleEditCard = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault()
    setContent(event.target.value)
  }

  const options: OptionsActionsMap[] = [
    {
      name: 'Delete Card',
      action: onDeleteCard,
    },
  ]

  return (
    <>
      <button
        className={[
          styles.card,
          isEditing ? styles.cardOverlay : undefined,
        ].join(' ')}
        onClick={handleOnClick}
      >
        <TextareaAutosize
          value={content}
          className={styles.cardContent}
          onChange={handleEditCard}
        />
        <AdditionalOptionsModal options={options} />
      </button>

      {isEditing && (
        <div className={styles.mask} onClick={() => setIsEditing(false)}></div>
      )}
    </>
  )
}
