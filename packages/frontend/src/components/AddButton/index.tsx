import React from 'react'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import styles from './index.module.css'

type Props = {
  onClick: () => void
}

export default function AddButton({ onClick }: Props) {
  return (
    <button className={styles.addButton} onClick={onClick}>
      <PlusIcon />
    </button>
  )
}
