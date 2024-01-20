import { Task } from './Task'
import styles from './TaskList.module.css'
import clipboard from '../assets/clipboard.svg'

interface TaskListProps {
    taskList: Task[]
    toggleCheckButton: (isChecked: boolean, task: string) => void
    removeTask: (task: string) => void
}

interface Task {
    task: string
    isChecked: boolean
}

export function TaskList({ taskList, toggleCheckButton, removeTask }: TaskListProps) {

    const totalCheckedTasks = taskList.reduce((totalCheckedTask, currentTask) => {
        if (currentTask.isChecked) {
            return totalCheckedTask + 1
        }
        return totalCheckedTask
    }, 0)

    return (
        <div>
            <div className={styles.info}>
                <div className={styles.created}>
                    <p>Tarefas criadas</p>
                    <span>{taskList.length}</span>
                </div>
                <div className={styles.done}>
                    <p>Concluídas</p>
                    <span>{taskList.length > 0 ? `${totalCheckedTasks} de ${taskList.length}` : '0'}</span>
                </div>
            </div>
            {taskList.length > 0 ? (
                <div className={styles.tasks}>
                    {taskList.map(item => (
                        <Task
                            key={item.task}
                            task={item.task}
                            isChecked={item.isChecked}
                            toggleCheckButton={toggleCheckButton}
                            removeTask={removeTask}
                        />
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