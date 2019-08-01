import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styles from './App.module.css'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import BasicJSX from './components/examples/01-jsx/BasicJSX'
import FunctionComponent from './components/examples/02-function-vs-class-component/FunctionComponent'
import Parent from './components/examples/03-props-vs-state/Parent'
import ConditionalRendering from './components/examples/04-conditional-rendering/ConditionalRendering'
import RenderingLists from './components/examples/05-rendering-lists/RenderingLists'
import Forms from './components/examples/06-forms/Forms'
import LiftingStateUp from './components/examples/07-lifting-state-up/LiftingStateUp'
import UseEffectExample from './components/examples/08-useEffect/UseEffectExample'

function App() {
    return (
        <BrowserRouter>
            <div className={styles.app}>
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/01-jsx" exact component={BasicJSX} />
                        <Route
                            path="/02-function-vs-class-component"
                            exact
                            component={FunctionComponent}
                        />
                        <Route
                            path="/03-props-vs-state"
                            exact
                            component={Parent}
                        />
                        <Route
                            path="/04-conditional-rendering"
                            exact
                            component={ConditionalRendering}
                        />
                        <Route
                            path="/05-rendering-lists"
                            exact
                            component={RenderingLists}
                        />
                        <Route path="/06-forms" exact component={Forms} />
                        <Route
                            path="/07-lifting-state-up"
                            exact
                            component={LiftingStateUp}
                        />
                        <Route
                            path="/08-useEffect"
                            exact
                            component={UseEffectExample}
                        />
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App
