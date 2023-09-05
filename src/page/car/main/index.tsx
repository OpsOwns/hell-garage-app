// CarManagementComponent.tsx
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const CarManagmentPage = () => {
  return (
    <Box sx={{ boxShadow: 3, p: 1, m: 1, borderRadius: 2 }}>
      <h2>Car Management</h2>

      <Outlet />
    </Box>
  );
};

export default CarManagmentPage;
