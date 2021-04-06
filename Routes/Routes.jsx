import { Route, Switch } from 'react-router';
import Home from '../Pages/Home/Home';
import Planos from '../Pages/Planos/Planos';
import React from 'react';

const Routes = () => {
    return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" exact component={Planos} />
    </Switch>
    )
}


export default Routes
