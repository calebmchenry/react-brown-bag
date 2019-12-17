import React from 'react'

import styles from './Child.module.css'

export default function Child({ count, incrementCount }) {
    return (
        <div className={styles.child}>
            <h2>Child</h2>
            <div>Count : {count}</div>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}
