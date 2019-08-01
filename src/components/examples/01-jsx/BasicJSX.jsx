import React from 'react'

export default () => {
    const message = 'This message was dynamic'
    const id = 'someOtherInputId'
    const handleButtonClick = () => {
        console.log('button was clicked')
    }

    return (
        // className instead of class
        // forHtml instead of for
        // onClick instead of onclick
        <div>
            <h1>JSX</h1>
            <div className="someClass">
                <form>
                    <label htmlFor="someInputId" />
                    <input id="someInputId" type="text" />
                </form>
            </div>
            <br />
            <div className="someClass">
                <h2>{message}</h2>
                <form>
                    <label htmlFor={id} />
                    <input id={id} type="text" />
                </form>
                <button onClick={handleButtonClick}>Button</button>
            </div>
        </div>
    )
}
