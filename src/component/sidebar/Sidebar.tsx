import { useState, useEffect } from 'react';
import {
  Drawer,
  IconButton,
  ListItemButton,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledList, StyledListText } from './sidebar.css';
import { SideItem, SideItems } from './Sideitems';
import theme from '../../theme';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const drawerWidth = !isMdScreen ? (isOpen ? 170 : 72) : 170;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isMdScreen) {
      setIsOpen(true);
    }
  }, [isMdScreen]);

  const renderListItem = (item: SideItem, index: number) => (
    <ListItemButton
      key={index}
      component={Link}
      to={item.Path}
      selected={location.pathname === item.Path}
      sx={{
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.light,
        },
      }}
    >
      <StyledListText primary={item.Text} />
    </ListItemButton>
  );

  const renderToggleButton = () => (
    <IconButton
      onClick={toggleSidebar}
      sx={{
        ml: -2,
        mr: 'auto',
        mt: 9,
      }}
    >
      <MenuIcon sx={{ color: '#ffffff' }} />
    </IconButton>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        '& .MuiDrawer-paper': {
          transition: 'width 0.3s',
          width: drawerWidth,
          boxSizing: 'border-box',
          elevation: 12,
          backgroundColor: theme.palette.primary.dark,
        },
      }}
    >
      <Toolbar>{!isMdScreen && renderToggleButton()}</Toolbar>
      <StyledList>
        {SideItems.map((item, index) => renderListItem(item, index))}
      </StyledList>
    </Drawer>
  );
};

export default Sidebar;
