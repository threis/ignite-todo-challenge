import { useState } from 'react'
import { Task } from './Task'
import styles from './TaskList.module.css'
import clipboard from '../assets/clipboard.svg'

export function TaskList() {

    const [taskList, setTaskList] = useState([1,2])

    return (
        <div>
            <div className={styles.info}>
                <div className={styles.created}>
                    <p>Tarefas criadas</p>
                    <span>5</span>
                </div>
                <div className={styles.done}>
                    <p>Concluídas</p>
                    <span>2 de 5</span>
                </div>
            </div>
            {taskList.length > 0 ? (
                <div className={styles.taskList}>
                    {taskList.map(task => (
                        <Task />
                    ))}
                </div>
            ) : (
                <div className={styles.taskListWithoutItems}>
                    <img src={clipboard} />
                    <p className={styles.textHighlight}>
                        Você ainda não tem tarefas cadastradas
                    </p>
                    <p>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            )}

        </div>
    )
}