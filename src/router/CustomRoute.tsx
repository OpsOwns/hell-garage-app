import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Layout from '../component/layout/Layout';

type Props = {
  children: React.ReactNode;
  RequiresAuthentication: boolean;
};

const CustomRoute = (props: Props) => {
  const { authenticated } = useAuth();

  if (props.RequiresAuthentication && !authenticated) {
    return Navigate({ to: '/login' });
  }

  if (!props.RequiresAuthentication && authenticated) {
    return Navigate({ to: '/' });
  }

  return authenticated ? (
    <Layout>{props.children}</Layout>
  ) : (
    <>{props.children}</>
  );
};

export default CustomRoute;
