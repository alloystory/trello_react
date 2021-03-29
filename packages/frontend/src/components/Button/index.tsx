import React, { ReactNode } from 'react'
import styles from './index.module.scss'

type Props = {
  isSquare?: boolean
  children: ReactNode
}

export default function Button({ isSquare, children }: Props) {
  return isSquare ? (
    <button className={styles.btnSquare}>{children}</button>
  ) : (
    <button className={styles.btn}>{children}</button>
  )
}
