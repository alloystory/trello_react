import React from 'react'
import styles from './App.module.css'
import Board from './components/Board'
import Header from './components/Header'

export default function App() {
  return (
    <div className={styles.layout}>
      <Header />
      <Board />
    </div>
  )
}
