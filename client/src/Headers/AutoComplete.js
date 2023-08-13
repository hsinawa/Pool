import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';

const MuiAutocomplete = ({ data }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event, value) => {
    setQuery(value);
  };

  return (
    <Autocomplete
      options={data?.name}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search..."
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            startAdornment: <Search />,
          }}
          value={query}
          onChange={handleInputChange}
        />
      )}
    />
  );
};

export default MuiAutocomplete;
