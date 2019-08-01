import React from 'react'
import PropTypes from 'prop-types'

const ComponentWithPropTypes = ({ name, address }) => {
    return (
        <div>
            <h1>Component with Prop Types</h1>
            <div>
                <span>Name: </span>
                <span>{name}</span>
            </div>
            <div>
                <span>Address: </span>
                <span>{address}</span>
            </div>
        </div>
    )
}

ComponentWithPropTypes.propTypes = {
    name: PropTypes.string,
    requiredValue: PropTypes.string.isRequired,
}

ComponentWithPropTypes.defaultProps = {
    address: '123 default City',
}

// PropType validator
// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

export default ComponentWithPropTypes
