import { Box, Container, Typography, styled } from '@mui/material';

export const LoginBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 8px;
  max-width: 400px;
  margin: 0 auto;
`;

export const LoginContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.7);
  padding: 24px;
  border-radius: 12px;
  background-color: white;
  margin-top: 48px;
  margin-bottom: 48px;
`;

export const LoginTitle = styled(Typography)`
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
`;
