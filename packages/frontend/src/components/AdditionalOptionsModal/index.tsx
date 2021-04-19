import React, { useState } from 'react'
import styles from './index.module.scss'
import { ReactComponent as EllipsisIcon } from '../../assets/more.svg'
import Button from '../Button'
import Divider from '../Divider'
import { nanoid } from 'nanoid'

type Props = {
  options: OptionsActionsMap[]
}

export type OptionsActionsMap = {
  name: string
  action: () => void
}

export default function AdditionalOptionsModal({ options }: Props) {
  const [isOptionsShown, setIsOptionsShown] = useState(false)

  return (
    <div className={styles.container}>
      <Button
        isSquare
        className={styles.showOptionsButton}
        onClick={() => setIsOptionsShown((isOptionsShown) => !isOptionsShown)}
      >
        <EllipsisIcon />
      </Button>

      {isOptionsShown && (
        <div className={styles.options}>
          <div className={styles.optionsTitle}>
            <div>Actions</div>
            <Divider className={styles.optionsDivider} />
          </div>

          {options.map((option) => {
            return (
              <div key={nanoid()} className={styles.optionsRow}>
                {option.name}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
