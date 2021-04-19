import React from 'react'
import styles from './index.module.scss'

type Props = {
  className?: string
}

export default function Divider({ className }: Props) {
  return <div className={[styles.divider, className].join(' ')}></div>
}
