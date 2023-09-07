import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
      style={{ marginBottom: "16px", marginTop: "5px" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchCar;
