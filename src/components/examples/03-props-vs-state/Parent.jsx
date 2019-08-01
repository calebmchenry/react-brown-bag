import React, { useState } from 'react'

import Child from './Child'
import styles from './Parent.module.css'

export default () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Props vs State</h1>
            <div className={styles.parent}>
                <h2>Parent</h2>
                <button onClick={decrementCount}>Decrement</button>
                <Child count={count} incrementCount={incrementCount} />
            </div>
        </div>
    )
}
