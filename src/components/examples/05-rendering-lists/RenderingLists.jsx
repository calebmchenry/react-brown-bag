import React, { useState, useRef } from 'react'

export default () => {
    const [todos, setTodos] = useState([])
    const inputRef = useRef(null)

    const addTodo = () => {
        const todo = inputRef.value
        setTodos([...todos, todo])
    }

    return (
        <div>
            <h1>Rendering Lists</h1>
            <input ref={inputRef} type="text" />
            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}
