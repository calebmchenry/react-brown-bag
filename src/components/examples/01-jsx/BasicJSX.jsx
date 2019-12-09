import React from 'react'

export default function BasicJSX() {

    function handleButtonClicked() {
        console.log('The button was clicked!');
    }

    const title = 'Hello World!'

    return (
        // ✅ Component must return a single root element 
        <form>
            {/* ✅ "{}" for JavaScript inside JSX */}
            <h2>{title}</h2>
            {/* ✅ forHtml instead of for */}
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
            {/* ✅ onClick instead of onclick */}
            <button className="primary-btn" type="button" onClick={handleButtonClicked}>Submit</button>
        </form>
    )
}
