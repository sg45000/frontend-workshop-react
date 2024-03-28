import { useState } from 'react'
import './App.css'

type Task = {
  id: string
  title: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
  ])
  const [input, setInput] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) { 
    event.preventDefault()

    const task: Task = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    setTasks([...tasks, task])
    setInput('')
  }

  return (
    <>
      <h1>Todoアプリ</h1>
      <ul>
        {
          tasks.length > 0 ?
          <> {
            tasks.map((task) => <li key={task.id}> {task.title}</li>)
          }
          </>
          : <p>タスクを追加してください</p>
        }
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(event) => setInput(event.target.value) } />
        <button type="submit">Add Task</button>
      </form>
    </>
  )
}

export default App
