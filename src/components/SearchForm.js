import React from "react";
/*import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import Typography from '@mui/material/Typography';
import '../styles/SearchForm.css'; */
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function SearchForm({ values, handleChange,  handleSubmit }) {
  return (
    <Paper sx={{ p: 3 }} >
    <form>
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
      
         variant={(values.searchTerm === "" ) ? "disabled" : "contained"/*If no searchTerm has been entered or searchBy selected, button is disabled.*/}
           onClick={(event) => {
            event.preventDefault();
            handleSubmit(values /* props.searchByHolder, props.searchTermHolder*/);
           }}
      >
        Search by username
      </Button>
    </form>
    </Paper>
  )
}

export default SearchForm;