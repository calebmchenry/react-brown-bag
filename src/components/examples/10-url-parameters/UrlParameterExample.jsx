import React from 'react'

import { Link } from 'react-router-dom'

export default ({ match }) => {
    return (
        <div>
            <div>
                <h1>URL Parameter Example</h1>
                <span>{match.params.color}</span>
            </div>
            <br />
            <div>
                <div>
                    <Link to="/10-url-parameters/green">green</Link>
                </div>
                <div>
                    <Link to="/10-url-parameters/red">red</Link>
                </div>
            </div>
        </div>
    )
}
