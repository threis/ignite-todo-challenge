import styles from './Task.module.css'
import check from '../assets/check.svg'

import { useState } from 'react'
import { Trash } from 'phosphor-react'

export function Task() {


    const [isChecked, setIsChecked] = useState(false)


    function handleToggleCheckButton() {
        setIsChecked(state => !state)
    }

    return (
        <div className={styles.taskContainer}>
            <button className={styles.checkButton} onClick={handleToggleCheckButton}>
                <div className={isChecked ? styles.checked : styles.unchecked}>
                    {isChecked && (<img src={check} />)}
                </div>
            </button>

            <p className={`${styles.textTask} ${isChecked && styles.textTaskMarkedAsChecked}`}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button className={styles.trashButton}>
                <Trash />
            </button>
        </div>
    )
}