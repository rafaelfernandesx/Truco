import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Preload from './pages/Preload';
import NotFound from './pages/NotFound';
import Rooms from './pages/Rooms';
import Play from './pages/Play';
import SignOut from './pages/SignOut';


import CustomRoute from './components/customRoutes/CustomRoute';

const routes = () => {

  return (
    <Switch>
      <CustomRoute exact path="/preload" component={Preload} />
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute exact path="/" component={Rooms} />
      <CustomRoute exact path="/play" component={Play} />
      <CustomRoute exact path="/logout" component={SignOut} />

      <Route component={NotFound} />
    </Switch>
  );

}

export default routes;