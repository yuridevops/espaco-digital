import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Store from './pages/Store'
import Espaco from './pages/Espaco'
import Portal from './pages/Portal'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Portal}/>
                <Route path="/:id" exact={true} component={Espaco}/>
                <Route path="/:id/store"  component={Store}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router