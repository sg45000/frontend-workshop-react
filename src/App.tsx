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
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <>
      <h1>Todoアプリ</h1>
      <ul>
        {tasks.map((task) => ())}
        <li>アイテム1</li>
        <li>アイテム2</li>
        <li>アイテム3</li>
      </ul>
    </>
  )
}

export default App
