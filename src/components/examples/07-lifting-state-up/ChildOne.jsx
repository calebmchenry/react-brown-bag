import React from 'react'

import styles from './LiftingStateUp.module.css'
import DisplayDataObject from './DisplayDataObject'

export default ({ dataObject, setDataObject }) => {
    const updateName = event => {
        const updatedDataObject = { ...dataObject, name: event.target.value }
        setDataObject(updatedDataObject)
    }

    return (
        <div className={styles.child1}>
            <h2>Child One</h2>
            <label htmlFor="dataObjectName">Name:</label>
            <input
                id="dataObjectName"
                type="text"
                value={dataObject.name}
                onChange={updateName}
            />
            <br />
            <DisplayDataObject dataObject={dataObject} />
        </div>
    )
}
