import styles from './Task.module.css'
import check from '../assets/check.svg'

import { Trash } from 'phosphor-react'

interface TaskProps {
    task: string
    isChecked: boolean
    toggleCheckButton: (isChecked: boolean, targetTask: string) => void
    removeTask: (targetTask: string) => void
}

export function Task({ task, isChecked, toggleCheckButton, removeTask }: TaskProps) {

    function handleToggleCheckButton() {
        toggleCheckButton(!isChecked, task)
    }

    function handleRemoveTask() {
        removeTask(task)
    }

    return (
        <div className={styles.taskContainer}>
            <button className={styles.checkButton} onClick={handleToggleCheckButton}>
                <div className={isChecked ? styles.checked : styles.unchecked}>
                    {isChecked && (<img src={check} />)}
                </div>
            </button>

            <p className={`${styles.textTask} ${isChecked && styles.textTaskMarkedAsChecked}`}>{task}</p>
            <button className={styles.trashButton} onClick={handleRemoveTask}>
                <Trash />
            </button>
        </div>
    )
}