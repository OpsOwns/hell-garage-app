import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

type AuthContextType = {
  authenticated: boolean;
  login: (receivedToken: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['jwt_token']);

  const navigate = useNavigate();

  useEffect(() => {
    setAuthenticated(Boolean(cookies.jwt_token));
  }, [cookies.jwt_token]);

  const [authenticated, setAuthenticated] = useState<boolean>(() => {
    return Boolean(cookies.jwt_token);
  });

  const login = (receivedToken: string) => {
    const expirationDate = new Date(Date.now() + 30 * 60 * 1000);
    setCookie('jwt_token', receivedToken, {
      secure: true,
      expires: expirationDate,
    });
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
    removeCookie('jwt_token');
    navigate('/login');
  };

  const contextValue: AuthContextType = {
    authenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
