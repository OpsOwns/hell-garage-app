import React, { useState, useEffect } from 'react';
import { Drawer, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledList } from './sidebar.css';
import theme from '../../theme';
import SidebarListItem from './SidebarListItem';
import routes from '../../router/routes';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const drawerWidth = !isMdScreen ? (isOpen ? 170 : 72) : 170;

  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedItems((prevExpandedItems) => {
      if (prevExpandedItems.includes(index)) {
        return prevExpandedItems.filter((itemIndex) => itemIndex !== index);
      } else {
        return [...prevExpandedItems, index];
      }
    });
  };

  // const filterRoutes = (routes: RouteObject[]) => {
  //   return routes
  //     .filter((item) => item.showRoute === undefined || item.showRoute === true)
  //     .map((item) => {
  //       if (item.children && item.children.length > 0) {
  //         // Recursively filter children
  //         item.children = filterRoutes(item.children);
  //       }
  //       return item;
  //     });
  // };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isMdScreen) {
      setIsOpen(true);
    }
  }, [isMdScreen]);

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
      <StyledList theme={theme}>
        {routes
          .filter(
            (item) => item.showRoute === undefined || item.showRoute === true
          )
          .map((item, index) => (
            <SidebarListItem
              key={index}
              item={item}
              index={index}
              expanded={expandedItems.includes(index)}
              toggleExpand={toggleExpand}
              isToggleClicked={isOpen}
            />
          ))}
      </StyledList>
    </Drawer>
  );
};

export default Sidebar;
