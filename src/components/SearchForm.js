import React from "react";
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { grey } from '@mui/material/colors';

const border = grey[700];

function SearchForm({ values, handleChange, handleSubmit, setPage }) {
  return (
    <Paper sx={{ p: 3, border: 4, borderColor: border }} >
      <FormControl>
        <TextField
          sx={{ my: 2 }}
          type="text"
          id="search-input"
          value={values.searchTerm}
          onChange={handleChange}
          name="searchTerm"
          variant="outlined"
          label="Enter GitHub User"
          required
        >
        </TextField>

        <br />

        <Button
          variant={(values.searchTerm === "") ? "disabled" : "contained"/*If no searchTerm has been entered or searchBy selected, button is disabled.*/}
          onClick={(event) => {
            event.preventDefault();
            handleSubmit(values);
            setPage(1);
          }}
        >
          Search by username
        </Button>
        
      </FormControl>
    </Paper>
  )
}

export default SearchForm;