import React, { useState } from 'react'

import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
import DisplayDataObject from './DisplayDataObject'
import styles from './LiftingStateUp.module.css'

export default () => {
    const initialDataObject = {
        id: '1234',
        name: 'John Doe',
        address: '123 St. Morgantown',
    }
    const [dataObject, setDataObject] = useState(initialDataObject)

    return (
        <div className={styles.parent}>
            <h1>Lifing State Up</h1>
            <DisplayDataObject dataObject={dataObject} />
            <br />
            <div>
                <ChildOne
                    dataObject={dataObject}
                    setDataObject={setDataObject}
                />
            </div>
            <br />
            <div>
                <ChildTwo
                    dataObject={dataObject}
                    setDataObject={setDataObject}
                />
            </div>
        </div>
    )
}
