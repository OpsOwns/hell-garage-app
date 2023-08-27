import { AppBar, Button, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  && {
    z-index: ${({ theme }) => theme.zIndex.drawer + 1};
    position: fixed;
  }
`;
export const FlexSpace = styled('div')({
  flex: 1,
});

export const LogoutButton = styled(Button)`
  && {
    text-transform: none;
    font-size: 1.25rem;
    color: inherit;
  }
`;
