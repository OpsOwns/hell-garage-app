import React from 'react';
import { TextField } from '@mui/material';

interface SearchCarProps {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchCar = ({ searchTerm, handleSearch }: SearchCarProps) => {
  return (
    <TextField
      label="Szukaj auta"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={handleSearch}
      style={{ marginBottom: '16px' }}
    />
  );
};

export default SearchCar;
