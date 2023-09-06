import { FormControl, Select, styled } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const StyledSelect = styled(Select)`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  margin-top: 10px;
`;
