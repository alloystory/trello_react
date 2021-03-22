import React from 'react'
import { ReactComponent as SunIcon } from '../../assets/sun.svg'
import styles from './index.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className="text-heading">Board Title</h1>
      <input
        type="text"
        className={styles['header--search']}
        placeholder="Search..."
      />
      <div className={styles['header--btns']}>
        <button className="btn header--btn">
          <SunIcon className={styles['header--theme-icon']} />
        </button>
        <button className="btn header--btn">AC</button>
      </div>
    </div>
  )
}
