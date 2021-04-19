import React, { useEffect, useState, Fragment } from 'react'
import * as types from '@monorepo/backend/types'
import styles from './index.module.scss'
import AdditionalOptionsModal, {
  OptionsActionsMap,
} from '../AdditionalOptionsModal'

type Props = {
  data: types.Card
  onDeleteCard: () => void
}

function Card({ data, onDeleteCard }: Props) {
  const [content, setContent] = useState('')

  useEffect(() => {
    setContent(data.content)
  }, [])

  const handleEditCard = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setContent(event.target.value)
  }

  const options: OptionsActionsMap[] = [
    {
      name: 'Delete Card',
      action: () => {
        console.log('delete card')
      },
    },
  ]

  return (
    <button className={styles.card}>
      <div className={styles.cardContent}>
        <p>{content}</p>
        <AdditionalOptionsModal options={options} />
      </div>
    </button>
  )
}

export default Card
