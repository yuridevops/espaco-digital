import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Store from './pages/Store'
import Espaco from './pages/Espaco'
import Portal from './pages/Portal'
import Genie from './pages/Genie'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Portal}/>
                <Route path="/:id" exact={true} component={Espaco}/>
                <Route path="/:id/store"  component={Store}/>
                <Route path="/:id/genie" exact={true} component={Genie}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router