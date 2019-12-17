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
            <h2>{title + " My name is Caleb!"}</h2>
            {/* ✅ htmlFor instead of for */}
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
            {/* ✅ className instead of class */}
            {/* ✅ onClick instead of onclick */}
            <button
                className="primary-btn"
                type="button"
                onClick={handleButtonClicked}
            >
                Submit
            </button>
        </form>
    )
}
