import { List, ListItemText, styled } from '@mui/material';

export const StyledListText = styled(ListItemText)({
  textAlign: 'center',
  color: '#ffffff',
});

export const StyledList = styled(List)(({ theme }) => ({
  '& .MuiListItemButton-root:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.light,
  },
}));
