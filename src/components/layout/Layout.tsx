import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import { LayoutContainer, ContentContainer, MainContent } from './layout.css';
import { Toolbar } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Navbar />
      <ContentContainer>
        <Sidebar />
        <MainContent>
          <Toolbar />
          {children}
        </MainContent>
      </ContentContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
