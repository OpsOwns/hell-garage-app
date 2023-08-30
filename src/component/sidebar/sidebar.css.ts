import { ListItemText, styled } from '@mui/material';

export const StyledListText = styled(ListItemText)({
  textAlign: 'center',
  color: '#ffffff',
});

export const StyledList = styled('div')(({ theme }) => ({
  '& .MuiDrawer-paper': {
    transition: 'width 0.3s',
    width: 'var(--drawer-width)',
    boxSizing: 'border-box',
    elevation: 12,
    backgroundColor: theme.palette.primary.dark,
  },
  '& .MuiListItemButton-root:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.light,
  },
}));

export const drawerWidth = {
  width: '170px',
};
