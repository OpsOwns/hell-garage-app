import { ComponentType } from 'react';
import CreateCarPage from '../page/car/createCar/page';
import HomePage from '../page/home/page';
import LoginPage from '../page/login/page';

export type Route = {
  Path: string;
  Page: ComponentType<any>;
  Text: string;
  SubItems?: Route[];
};

const routes: Route[] = [
  {
    Path: '*',
    Page: HomePage,
    Text: 'Home',
  },
  {
    Path: '/login',
    Page: LoginPage,
    Text: 'Login',
  },
  {
    Path: '/car',
    Page: CreateCarPage,
    Text: 'Auta',
    SubItems: [
      {
        Path: '/car/create',
        Text: 'Utwórz',
        Page: CreateCarPage,
      },
    ],
  },
];

export default routes;
