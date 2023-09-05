import { useRoutes } from 'react-router-dom';
import routes from './router/routes';

const App = () => {
  return useRoutes(routes);
};

export default App;
