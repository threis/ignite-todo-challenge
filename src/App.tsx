import './global.css'
import styles from './App.module.css'
import logo from './assets/logo.svg'
import { NewTaskInput } from './components/NewTaskInput'
import { TaskList } from './components/TaskList'


function App() {

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={logo} alt="Logotipo Ignite To Do" />
      </header>
      <main className={styles.main}>
        <NewTaskInput />
        <TaskList />
      </main>
    </div>
  )
}

export default App
