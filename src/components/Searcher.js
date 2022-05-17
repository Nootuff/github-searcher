import React from "react";
import SearchForm from "./SearchForm";

import ResultField from "./ResultField";
import useSearch from "../hooks/useSearch";
import useInputState from "../hooks/useInputState";
import '../styles/Searcher.css';


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
import Box from '@mui/material/Box';





function Searcher() {
  const [values, /* searchTermHolder,*/ handleChange] = useInputState();

  const [user, repos, searched, searchTerm, handleSubmit] = useSearch();
  return (
    <Box
    id="Searcher"
    >
      <section id="Searcher-header">
      <Typography variant="h4" sx={{ mt: 4 }} >GitHub User Searcher</Typography>

      <Typography variant="h6" sx={{ my: 2 }} > By Adam Walker </Typography>

      <Typography variant="h6" sx={{ mb: 2 }} >
        <Link href="https://github.com/Nootuff/github-searcher" target="_blank" rel="noopener">View site code on GitHub</Link>
      </Typography>
      </section>
      <SearchForm
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {searched &&

        <ResultField
        user={user}
        repos={repos}
          searchTerm={searchTerm}
        />

      }

      {/*<ResultCard
result = {result}
  />*/}

      
    </Box>
  )
}

export default Searcher;