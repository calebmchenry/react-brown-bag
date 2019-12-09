import React, { useState, useEffect } from 'react'

export default () => {
    const [name, setName] = useState('')
    const [isMayor, setIsMayor] = useState(false)

    useEffect(() => {
        console.log('Initial render')
    }, []) // [] means this is only ran on initial render

    useEffect(() => {
        console.log(`Name changed to '${name}'`)
    }, [name]) // Specifying dependencies cause this to only run when thos dependencies change

    useEffect(() => {
        async function getDadJoke() {
            const response = await fetch('https://icanhazdadjoke.com/', {
                headers: { Accept: 'application/json' },
            })
            const data = await response.json();
            console.log(data.joke);
        }

        getDadJoke();
        console.log('Component rendered')
    }) // With no array this is called every render

    const handleNameChange = event => {
        setName(event.target.value)
    }

    const handleIsMayourChange = event => {
        setIsMayor(event.target.checked)
    }

    return (
        <div>
            <h1>useEffect Example</h1>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={handleNameChange}
            />
            <div />
            <label htmlFor="isMayor">Mayor:</label>
            <input
                name="isMayor"
                type="checkbox"
                checked={isMayor}
                onChange={handleIsMayourChange}
            />
        </div>
    )
}
