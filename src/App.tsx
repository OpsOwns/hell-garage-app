import { Route, Routes } from 'react-router-dom';
import routes from './router/routes';
import CustomRoute from './router/CustomRoute';

const App = () => {
  return (
    <Routes>
      {routes.map((route, key) => (
        <Route
          key={key}
          path={route.Path}
          element={
            <CustomRoute RequiresAuthentication={route.RequiresAuthentication}>
              <route.Page />
            </CustomRoute>
          }
        ></Route>
      ))}
    </Routes>
  );
};

export default App;
