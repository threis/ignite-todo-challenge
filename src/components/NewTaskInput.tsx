import { ChangeEvent, FormEvent, InputHTMLAttributes, InvalidEvent, useState } from 'react'
import styles from './NewTaskInput.module.css'

import { PlusCircle } from "phosphor-react"

interface NewTaskInputProps {
    addNewTask: (tasks: string) => void
    taskList: Task[]
}

interface Task {
    task: string
    isChecked: boolean
}

export function NewTaskInput({ addNewTask, taskList }: NewTaskInputProps) {

    const [inputNewTask, setInputNewTask] = useState('')

    function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {

        if (!inputNewTask) {
            event.target.setCustomValidity("Esse campo é obrigatório!")
        }
    }

    interface FormElements extends HTMLFormControlsCollection {
        inputTask: HTMLInputElement
    }

    interface CustomFormElements extends HTMLFormElement {
        readonly elements: FormElements
    }

    function handleAddNewTask(event: FormEvent<CustomFormElements>) {
        event.preventDefault()

        if (taskList.find(item => item.task === inputNewTask)) {
            event.currentTarget.elements.inputTask.setCustomValidity("Essa tarefa já foi adicionada!")!
            return
        }
        addNewTask(inputNewTask)
        setInputNewTask('')
    }

    function handleChangeTaskInputValue(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("")
        setInputNewTask(event.target.value)
    }

    return (
        <form className={styles.container} onSubmit={handleAddNewTask}>
            <input
                type="text"
                name="inputTask"
                placeholder="Adicione uma nova tarefa"
                onChange={handleChangeTaskInputValue}
                value={inputNewTask} required
                onInvalid={handleNewCommentInvalid}
            />
            <button type="submit">
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    )
}