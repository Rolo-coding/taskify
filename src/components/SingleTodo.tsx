import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'

interface Props {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editValue, setEditValue] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  const editTodo = (e: React.FormEvent, id: number) => {
    e.preventDefault()

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editValue } : todo
      )
    )
    setEdit(false)
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const checkTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone, id } : todo
      )
    )
  }

  return (
    <form className="todo" onSubmit={(e) => editTodo(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="todo__text"
        />
      ) : todo.isDone ? (
        <s className="todo__text">{todo.todo}</s>
      ) : (
        <span className="todo__text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) setEdit(!edit)
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => deleteTodo(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => checkTodo(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
