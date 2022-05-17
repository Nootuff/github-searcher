import React from "react";
import SearchForm from "./SearchForm";

import ResultField from "./ResultField";
import useSearch from "../hooks/useSearch";
import useInputState from "../hooks/useInputState";


/*import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/SearchForm.css';*/
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Searcher() {
  const [values, /* searchTermHolder,*/ handleChange] = useInputState();

  const [result, searched, searchTerm, handleSubmit] = useSearch();
  return (
    <div>
      <Typography variant="h4" sx={{ mt: 4 }} >GitHub User Searcher</Typography>

      <SearchForm
        values={values}
        handleChange={handleChange}
        result={result}
        handleSubmit={handleSubmit}
      />

      {searched &&

        <ResultField
          result={result}
          searchTerm={searchTerm}
        />

      }

      {/*<ResultCard
result = {result}
  />*/}

      <Typography variant="h6">
        <Link href="https://github.com/Nootuff/github-searcher" target="_blank" rel="noopener">View site code on GitHub</Link>
      </Typography>
    </div>
  )
}

export default Searcher;