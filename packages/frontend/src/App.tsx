import React from 'react'
import Header from './components/Header'
import Board from './components/Board'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.layout}>
      <Header />
      <Board />
    </div>
  )
}
