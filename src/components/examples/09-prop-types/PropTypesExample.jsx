import React, { useState } from 'react'

import ComponentWithPropTypes from './ComponentWithPropTypes'

export default () => {
    const [name, setName] = useState('John')

    const setNameToInvalidValue = () => {
        setName(1)
    }

    const setNameToValidValue = () => {
        setName('John')
    }

    return (
        <div>
            <h1>Prop Types Example</h1>
            <button onClick={setNameToInvalidValue}>Invalid Value</button>
            <button onClick={setNameToValidValue}>Valid Value</button>
            <ComponentWithPropTypes name={name}></ComponentWithPropTypes>
        </div>
    )
}
