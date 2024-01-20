import './global.css'
import styles from './App.module.css'
import logo from './assets/logo.svg'
import { NewTaskInput } from './components/NewTaskInput'
import { TaskList } from './components/TaskList'
import { useState } from 'react'

interface List {
  task: string
  isChecked: boolean
}


function App() {

  const [taskList, setTaskList] = useState<List[]>([])

  function addNewTask(newTask: string) {
    setTaskList([...taskList, { task: newTask, isChecked: false }])
  }

  function toggleCheckButton(newCheckValue: boolean, targetTask: string) {
    const newTaskList = taskList.map(item => {
      if (item.task === targetTask) {
        return { ...item, isChecked: newCheckValue }
      } else {
        return item
      }
    })

    setTaskList(newTaskList)

  }

  function removeTask(targetTask: string) {

    const newTaskListWithouTargetTask = taskList.filter(item => item.task !== targetTask)
    setTaskList(newTaskListWithouTargetTask)
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={logo} alt="Logotipo Ignite To Do" />
      </header>
      <main className={styles.main}>
        <NewTaskInput addNewTask={addNewTask} taskList={taskList} />
        <TaskList
          taskList={taskList}
          toggleCheckButton={toggleCheckButton}
          removeTask={removeTask}
        />
      </main>
    </div>
  )
}

export default App
