import React, { useState } from 'react'

export default () => {
    const [showMessage, setShowMessage] = useState(true)

    const toggleShowMessage = () => {
        setShowMessage(!showMessage)
    }

    const message = showMessage ? (
        <span>Now you see me</span>
    ) : (
            <span>Now you don't</span>
        )

    return (
        <div>
            <h1>Conditional Rendering</h1>
            <button onClick={toggleShowMessage}>Toggle</button>

            {/* Option 1 */}
            <h2>With Variable</h2>
            {message}

            <br />

            {/* Option 2 */}
            <h2>Inline if</h2>
            {showMessage && (
                <span>I will disappear if you click the button</span>
            )}

            <br />

            {/* Option 3 */}
            <h2> Inline ternary</h2>
            {showMessage ? <span>Hello</span> : <span>Good bye</span>}
        </div>
    )
}
