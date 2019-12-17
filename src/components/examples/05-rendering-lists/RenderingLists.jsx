import React, { useState } from 'react'

export default () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue === '') {
            return;
        }
        setTodos([...todos, inputValue])
    }

    function handleInputChange(e) {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <h1>Rendering Lists</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}
