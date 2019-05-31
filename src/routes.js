import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

export default <Switch>
   <Route component={Dashboard} exact path="/dashboard" />
   <Route component={Form} exact path="/form" />
   {/* <Route render={() => <h1>Home</h1>} path="/" />
   <Route render={() => <h1>404 Route Not Found</h1>} /> */}
</Switch>