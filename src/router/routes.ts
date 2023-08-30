import { ComponentType } from 'react';
import CreateCarPage from '../page/car/createCar/page';
import HomePage from '../page/home/page';
import LoginPage from '../page/login/page';

export type Route = {
  Path: string;
  Page: ComponentType<any>;
  RequiresAuthentication: boolean;
  Text: string;
  SubItems?: Route[];
};

const routes: Route[] = [
  {
    Path: '*',
    Page: HomePage,
    RequiresAuthentication: true,
    Text: 'Home',
  },
  {
    Path: '/login',
    Page: LoginPage,
    RequiresAuthentication: false,
    Text: 'Login',
  },
  {
    Path: '/car',
    Page: CreateCarPage,
    RequiresAuthentication: true,
    Text: 'Auta',
    SubItems: [
      {
        Path: '/car/create',
        Text: 'Utwórz',
        Page: CreateCarPage,
        RequiresAuthentication: true,
      },
    ],
  },
];

export default routes;
