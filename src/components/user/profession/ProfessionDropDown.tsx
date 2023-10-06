import { InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import { StyledProfessionDropDown } from './ProfessionDropDown.css';

interface ProfessionDropDownProps {
  value: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
  error: boolean | undefined;
}

const ProfessionDropDown = ({
  value,
  onChange,
  error,
}: ProfessionDropDownProps) => {
  return (
    <>
      <InputLabel htmlFor="profession">Zawód</InputLabel>
      <StyledProfessionDropDown
        theme={theme}
        id="profession"
        name="profession"
        value={value}
        onChange={onChange}
        error={error}
      >
        <MenuItem value="Mechanic">Mechanik</MenuItem>
        <MenuItem value="Office worker">Pracownik biurowy</MenuItem>
        <MenuItem value="Cleaner">Sprzątaczka</MenuItem>
      </StyledProfessionDropDown>
    </>
  );
};

export default ProfessionDropDown;
