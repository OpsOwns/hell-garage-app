import { InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { StyledFuelTypeDropdown } from './FuelTypeDropdown.css';
import theme from '../../../theme';

interface FuelTypeDropdownProps {
  value: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
  error: boolean | undefined;
}

const FuelTypeDropdown = ({
  value,
  onChange,
  error,
}: FuelTypeDropdownProps) => {
  return (
    <>
      <InputLabel htmlFor="fuelType">Rodzaj paliwa</InputLabel>
      <StyledFuelTypeDropdown
        theme={theme}
        id="fuelType"
        name="fuelType"
        value={value}
        onChange={onChange}
        error={error}
      >
        <MenuItem value="Gasoline">Benzyna</MenuItem>
        <MenuItem value="Diesel">Diesel</MenuItem>
        <MenuItem value="Electric">Eleketryczny</MenuItem>
      </StyledFuelTypeDropdown>
    </>
  );
};

export default FuelTypeDropdown;
