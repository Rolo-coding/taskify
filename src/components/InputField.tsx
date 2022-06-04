import React, { useRef } from 'react'
import './styles.css'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  addTodo: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      className="input"
      onSubmit={(e) => {
        addTodo(e)
        inputRef.current?.blur()
      }}
    >
      <input
        ref={inputRef}
        className="input__box"
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  )
}

export default InputField
