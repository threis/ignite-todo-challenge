import styles from './NewTaskInput.module.css'

import { PlusCircle } from "phosphor-react"

export function NewTaskInput() {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type="submit">
                Criar
                <PlusCircle size={16}/>
            </button>
        </div>
    )
}