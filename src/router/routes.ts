import AboutPage from '../page/about/page';
import HomePage from '../page/home/page';
import LoginPage from '../page/login/page';

type Route = {
  Path: string;
  Page: React.ComponentType<any>;
  RequiresAuthentication: boolean;
};

const routes: Route[] = [
  {
    Path: '*',
    Page: HomePage,
    RequiresAuthentication: true,
  },
  {
    Path: '/login',
    Page: LoginPage,
    RequiresAuthentication: false,
  },
  {
    Path: '/about',
    Page: AboutPage,
    RequiresAuthentication: true,
  },
];

export default routes;
