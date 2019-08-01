import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

export default () => {
    return (
        <header className={styles.header}>
            <h1>
                <Link to="/">React Demo</Link>
            </h1>
            <nav>
                <ul>
                    <Link to="/01-jsx">
                        <li>JSX</li>
                    </Link>
                    <Link to="/02-function-vs-class-component">
                        <li>Function vs Class component</li>
                    </Link>
                    <Link to="/03-props-vs-state">
                        <li>Props vs State</li>
                    </Link>
                    <Link to="/04-conditional-rendering">
                        <li>Conditional Rendering</li>
                    </Link>
                    <Link to="/05-rendering-lists">
                        <li>Rendering Lists</li>
                    </Link>
                    <Link to="/06-forms">
                        <li>Forms</li>
                    </Link>
                    <Link to="/07-lifting-state-up">
                        <li>Lifing State Up</li>
                    </Link>
                    <Link to="/08-useEffect">
                        <li>useEffect Example</li>
                    </Link>
                    <Link to="/09-prop-types">
                        <li>Prop Types</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
