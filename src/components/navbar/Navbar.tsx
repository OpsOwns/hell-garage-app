import { Toolbar, Typography } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../../context/AuthContext';
import { FlexSpace, LogoutButton, StyledAppBar } from './navbar.css';

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <StyledAppBar>
      <Toolbar>
        <DirectionsCarIcon fontSize="large" />
        <Typography variant="h6" ml={3}>
          Hell Garage
        </Typography>
        <FlexSpace />
        <Typography variant="h6" mr={3}>
          Witaj, Test
        </Typography>
        <LogoutButton
          startIcon={<LogoutIcon fontSize="large" />}
          onClick={logout}
          color="inherit"
        >
          Wyloguj
        </LogoutButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
