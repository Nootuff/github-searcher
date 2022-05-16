import React from "react";
/*import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/SearchForm.css'; */


function SearchForm({ values, handleChange, result, handleSubmit }) {
  return (
    <form>
      <input
        type="text"
        id="search-input"
        value={values.searchTerm}
        onChange={handleChange}
        name="searchTerm"
      >

      </input>
      <br />
      <button 
           onClick={(event) => {
            event.preventDefault();
            handleSubmit(values /* props.searchByHolder, props.searchTermHolder*/);
           }}
      >
        Saerch by username
      </button>
    </form>
  )
}

export default SearchForm;