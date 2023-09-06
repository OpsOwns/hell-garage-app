import AuthRoute from './AuthRoute';
import LoginPage from '../page/login';
import HomePage from '../page/home';
import CarManagmentPage from '../page/car';
import React from 'react';

interface RouteObject {
  path: string;
  element: React.ReactNode;
  name: string;
  children?: RouteObject[];
  showRoute?: boolean;
}

const createRoute = (
  path: string,
  name: string,
  element: React.ReactNode,
  children?: RouteObject[],
  showRoute = true
): RouteObject => ({
  path,
  name,
  element: <AuthRoute path={path}>{element}</AuthRoute>,
  children,
  showRoute,
});

const routes: RouteObject[] = [
  createRoute('/', 'home', <HomePage />),
  createRoute('/login', 'login', <LoginPage />, undefined, false),
  createRoute('/car', 'auta', <CarManagmentPage />),
];

export default routes;
