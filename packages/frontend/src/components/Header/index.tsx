import React from 'react'
import { ReactComponent as SunIcon } from '../../assets/sun.svg'
import Button from '../Button'
import styles from './index.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <BoardTitle />
      <SearchBar />
      <RightButtons />
    </div>
  )
}

function BoardTitle() {
  return <h1 className={styles.boardTitle}>Board Title</h1>
}

function SearchBar() {
  return (
    <input type="text" className={styles.searchBar} placeholder="Search..." />
  )
}

function RightButtons() {
  return (
    <div className={styles.rightButtons}>
      <Button isSquare className={styles.rightButton}>
        <SunIcon className={styles.sunIcon} />
      </Button>
      <Button isSquare className={styles.rightButton}>
        AC
      </Button>
    </div>
  )
}
