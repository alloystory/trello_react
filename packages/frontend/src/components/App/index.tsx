import React from 'react'
import Board from '../Board'
import Header from '../Header'
import styles from './index.module.scss'

export default function App() {
  return (
    <div className={styles.layout}>
      <Header />
      <Board />
    </div>
  )
}
