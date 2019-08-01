import React from 'react'

export default ({ dataObject }) => {
    return (
        <div>
            <div>
                <span>{dataObject.id}</span>
            </div>
            <div>
                <span>{dataObject.name}</span>
            </div>
            <div>
                <span>{dataObject.address}</span>
            </div>
        </div>
    )
}
