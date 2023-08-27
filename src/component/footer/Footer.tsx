import { Container, Typography } from '@mui/material';
import { FooterBar } from './footer.css';

const Footer = () => {
  return (
    <FooterBar>
      <Container maxWidth="lg">
        <Typography variant="body1" color="inherit" align="center">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Container>
    </FooterBar>
  );
};

export default Footer;
