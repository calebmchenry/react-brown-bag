import React from 'react'

import styles from './LiftingStateUp.module.css'
import DisplayDataObject from './DisplayDataObject'

export default ({ dataObject, setDataObject }) => {
    const updateAddress = event => {
        const updatedDataObject = { ...dataObject, address: event.target.value }
        setDataObject(updatedDataObject)
    }

    return (
        <div className={styles.child2}>
            <h2>Child Two</h2>
            <label htmlFor="dataObjectAddress">Address:</label>
            <input
                id="dataObjectName"
                type="text"
                value={dataObject.address}
                onChange={updateAddress}
            />
            <br />
            <DisplayDataObject dataObject={dataObject} />
        </div>
    )
}
