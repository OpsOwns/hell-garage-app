import { Collapse, List, ListItemButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Route } from '../../router/routes';
import theme from '../../theme';
import { StyledListText } from './sidebar.css';

interface SidebarListItemProps {
  item: Route;
  index: number;
  expanded: boolean;
  toggleExpand: (index: number) => void;
}

const SidebarListItem = ({
  item,
  index,
  expanded,
  toggleExpand,
}: SidebarListItemProps) => {
  const location = useLocation();
  const isSubItemExpanded = expanded;

  return (
    <>
      <ListItemButton
        key={index}
        component={Link}
        to={item.Path}
        onClick={() => toggleExpand(index)}
        sx={{
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.light,
          },
        }}
      >
        <StyledListText primary={item.Text} />
        {item.SubItems &&
          (isSubItemExpanded ? (
            <ExpandLess sx={{ color: '#ffffff' }} />
          ) : (
            <ExpandMore sx={{ color: '#ffffff' }} />
          ))}
      </ListItemButton>
      {item.SubItems && (
        <Collapse in={isSubItemExpanded}>
          <List component="div" disablePadding>
            {item.SubItems.map((subItem, subIndex) => (
              <ListItemButton
                key={subIndex}
                component={Link}
                to={subItem.Path}
                selected={location.pathname === subItem.Path}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.light,
                  },
                  paddingLeft: theme.spacing(4),
                }}
              >
                <StyledListText primary={subItem.Text} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SidebarListItem;
