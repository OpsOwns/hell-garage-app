// CarManagementComponent.tsx
import { Box } from '@mui/material';
import ListCarPage from '../list';

const CarManagmentPage = () => {
  return (
    <Box sx={{ boxShadow: 3, p: 1, m: 1, borderRadius: 2 }}>
      <h2>Car Management</h2>

      <ListCarPage />
    </Box>
  );
};

export default CarManagmentPage;
