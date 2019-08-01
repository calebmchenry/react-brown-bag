import React from 'react'

import styles from './Child.module.css'

export default props => {
    return (
        <div className={styles.child}>
            <h2>Child</h2>
            <div>Count : {props.count}</div>
            <button onClick={props.incrementCount}>Increment</button>
        </div>
    )
}
