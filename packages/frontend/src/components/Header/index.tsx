import React from 'react'
import { ReactComponent as SunIcon } from '../../assets/sun.svg'
import Button from '../Button'
import styles from './index.module.scss'

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
      <Button isSquare>
        <SunIcon className={styles.sunIcon} />
      </Button>
      <Button isSquare>AC</Button>
    </div>
  )
}

export default function Header() {
  return (
    <div className={styles.header}>
      <BoardTitle />
      <SearchBar />
      <RightButtons />
    </div>
  )
}
