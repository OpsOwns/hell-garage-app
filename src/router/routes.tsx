import CustomRoute from './CustomRoute';
import LoginPage from '../page/login/page';
import HomePage from '../page/home/page';
import CreateCarPage from '../page/car/create';
import CarManagmentPage from '../page/car/main';
import React from 'react';
import ListCarPage from '../page/car/list';
import DetailsCarPage from '../page/car/details';
import EditCarPage from '../page/car/edit';
import AddCarPage from '../page/car/create';

export interface RouteObject {
  path: string;
  element: React.ReactNode;
  name: string;
  children?: RouteObject[];
  showRoute?: boolean;
}

const routes: RouteObject[] = [
  {
    path: '/',
    name: 'home',
    element: (
      <CustomRoute path="/">
        <HomePage />
      </CustomRoute>
    ),
  },
  {
    path: '/login',
    name: 'login',
    showRoute: false,
    element: (
      <CustomRoute path="/login">
        <LoginPage />
      </CustomRoute>
    ),
  },
  {
    path: '/car/',
    name: 'auta',
    element: (
      <CustomRoute path="/car">
        <CarManagmentPage />
      </CustomRoute>
    ),
    children: [
      {
        path: '',
        name: 'lista',
        element: <ListCarPage />,
        showRoute: false,
      },
      {
        path: ':carId',
        name: 'detale',
        element: <DetailsCarPage />,
      },
      {
        path: ':carId/edit',
        name: 'edytuj',
        element: <EditCarPage />,
      },
      {
        path: 'add',
        name: 'dodaj',
        element: <AddCarPage />,
      },
    ],
  },
];

export default routes;
