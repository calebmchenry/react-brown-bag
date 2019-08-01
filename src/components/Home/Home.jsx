import React from 'react'

export default () => {
    return (
        <div>
            <h1>React Demo</h1>
            <p>
                Short demo of some basic components. And then some other topics
                to discuss
            </p>
            <h2 id="toolingtopics">Tooling Topics</h2>
            <ol>
                <li>npm</li>
                <li>Webpack</li>
                <li>CRA</li>
                <li>CSS with React</li>
            </ol>
            <h2 id="basictopics">Basic Topics</h2>
            <ol>
                <li>ES6 overview</li>
                <li>
                    JSX
                    <ol>
                        <li>
                            Differences with HTML
                            <ol>
                                <li>class</li>
                                <li>for</li>
                                <li>on*</li>
                            </ol>
                        </li>
                        <li>Embedding JS</li>
                        <li>Attributes</li>
                    </ol>
                </li>
                <li>Function vs Class Components</li>
                <li>
                    Props
                    <ol>
                        <li>Read-Only</li>
                        <li>Passed Down</li>
                    </ol>
                </li>
                <li>State</li>
                <li>
                    Conditional Rendering
                    <ol>
                        <li>Element Variables</li>
                        <li>Inline if</li>
                        <li>Inline ternary</li>
                        <li>null => not rendered</li>
                    </ol>
                </li>
                <li>
                    Lists
                    <ol>
                        <li>Keys</li>
                        <li>Keys with index</li>
                        <li>Inline vs Variable</li>
                    </ol>
                </li>
                <li>
                    Forms
                    <ol>
                        <li>textarea</li>
                        <li>select</li>
                    </ol>
                </li>
                <li>Lifting State up</li>
                <li>useEffect</li>
            </ol>
            <h2 id="advancestopics">Advances Topics</h2>
            <ol>
                <li>Routing</li>
                <li>PropTypes</li>
                <li>Context</li>
                <li>
                    Hooks
                    <ol>
                        <li>useContext</li>
                        <li>useEffect</li>
                        <li>useReducer</li>
                        <li>Custom Hooks</li>
                    </ol>
                </li>
                <li>Testing with react-testing-library</li>
            </ol>
        </div>
    )
}
