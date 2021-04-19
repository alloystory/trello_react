import React, { ReactNode } from 'react'
import styles from './index.module.scss'

type Props = {
  isSquare?: boolean
  className?: string
  onClick?: () => void
  children: ReactNode
}

export default function Button({
  isSquare,
  className,
  onClick,
  children,
}: Props) {
  return isSquare ? (
    <button
      className={[styles.btnSquare, className].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <button className={[styles.btn, className].join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}
