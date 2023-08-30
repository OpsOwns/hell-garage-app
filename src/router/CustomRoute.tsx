import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Layout from '../component/layout/Layout';

type Props = {
  children: React.ReactNode;
  path: string;
};

const CustomRoute = ({ children, path }: Props) => {
  const { authenticated } = useAuth();

  if (path === '/login') {
    return authenticated ? <Navigate to="/" /> : children;
  }

  return authenticated ? <Layout>{children}</Layout> : <Navigate to="/login" />;
};

export default CustomRoute;
