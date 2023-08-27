import { AppBar, styled } from '@mui/material';

export const FooterBar = styled(AppBar)`
  && {
    z-index: ${({ theme }) => theme.zIndex.drawer + 1};
    position: sticky;
    color: primary;
  }
`;
