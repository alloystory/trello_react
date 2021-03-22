import React from 'react'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import styles from './index.module.css'

export default function AddButton() {
  return (
    <button className={styles.addButton}>
      <PlusIcon />
    </button>
  )
}
