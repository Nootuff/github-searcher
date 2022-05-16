
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


function ResultCard({result/* values, handleChange, result, handleSubmit */}) {
  return (
<div>


{result ? 
<div>
<h1>{result.login}</h1>
<h5>{result.bio}</h5>
</div>
:
"Sorry nothing found"
}

</div>
    )
  }
  
  export default ResultCard;


