import { Collapse, List, ListItemButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import theme from '../../theme';
import { StyledListText } from './sidebar.css';
import { RouteObject } from '../../router/routes';
import { useEffect, useState } from 'react';

interface SidebarListItemProps {
  item: RouteObject;
  index: number;
  expanded: boolean;
  toggleExpand: (index: number) => void;
  isToggleClicked: boolean;
}

const SidebarListItem = ({
  item,
  index,
  expanded,
  toggleExpand,
  isToggleClicked,
}: SidebarListItemProps) => {
  const location = useLocation();
  const isSubItemExpanded = expanded;
  const [subItemPadding, setSubItemPadding] = useState<number>(4);

  const isMainItemSelected = location.pathname === item.path;

  useEffect(() => {
    if (isToggleClicked) {
      setSubItemPadding(4);
    } else {
      setSubItemPadding(0);
    }
  });

  const toggleSubItems = () => {
    toggleExpand(index);
  };

  return (
    <>
      <ListItemButton
        key={index}
        component={Link}
        to={item?.path!}
        onClick={toggleSubItems}
        selected={isMainItemSelected}
        sx={{
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.light,
          },
        }}
      >
        <div style={{ flex: 1 }}>
          <StyledListText primary={item.name} />
        </div>
        {item.children &&
          (isSubItemExpanded ? (
            <ExpandLess sx={{ color: '#ffffff' }} />
          ) : (
            <ExpandMore sx={{ color: '#ffffff' }} />
          ))}
      </ListItemButton>
      {item.children && (
        <Collapse in={isSubItemExpanded}>
          <List component="div" disablePadding>
            {item.children.map((subItem, subIndex) => {
              const isSubItemSelected = location.pathname.includes(
                subItem.path
              );

              return (
                <ListItemButton
                  key={subIndex}
                  component={Link}
                  to={`${item.path}${subItem.path}`}
                  selected={isSubItemSelected}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: theme.palette.primary.light,
                    },
                    paddingLeft: theme.spacing(subItemPadding),
                    maxWidth: '100%',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <StyledListText primary={subItem.name} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SidebarListItem;
