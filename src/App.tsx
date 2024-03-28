import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Task = {
  id: string
  title: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Task 1', completed: false },
    { id: '2', title: 'Task 2', completed: true },
  ])

  return (
    <>
      <h1>Todoアプリ</h1>
      <ul>
        {
          tasks.map((task) => <li key={task.id}>{task.title}</li>)
        }
      </ul>
    </>
  )
}

export default App
