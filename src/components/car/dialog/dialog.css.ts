import { FormControl, styled } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;