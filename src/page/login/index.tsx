import { Button, TextField } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

import { LoginBox, LoginContainer, LoginTitle } from './index.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    login('Test');
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <LoginBox>
          <LoginContainer>
            <LoginTitle variant="h3" textAlign="center">
              Hell Garage
            </LoginTitle>

            <TextField
              margin={'normal'}
              type={'text'}
              variant="outlined"
              label="Login"
              placeholder="Login"
            />

            <TextField
              margin={'normal'}
              type={'password'}
              variant="outlined"
              label="Haslo"
              placeholder="Haslo"
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: 3, borderRadius: 3 }}
              color="primary"
            >
              Zaloguj
            </Button>
          </LoginContainer>
        </LoginBox>
      </form>
    </div>
  );
};

export default LoginPage;
