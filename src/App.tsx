import React, { useState } from 'react'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './model'
import './App.css'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo('')
    }
  }

  return (
    <div className="App">
      <span className="heading">taskify</span>
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
