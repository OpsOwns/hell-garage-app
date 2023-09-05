import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Layout from '../component/layout/Layout';

type Props = {
  children: React.ReactNode;
  path: string;
};

const AuthRoute = ({ children, path }: Props) => {
  const { authenticated } = useAuth();

  return path === '/login' ? (
    authenticated ? (
      <Navigate to="/" />
    ) : (
      children
    )
  ) : authenticated ? (
    <Layout>{children}</Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthRoute;
