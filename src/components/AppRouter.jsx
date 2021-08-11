import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';
import { privatRoutes, publicRoutes } from './router';

const AppRouter = () => {
  const isAuth = false;
  return isAuth ? (
    <Switch>
      {privatRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
