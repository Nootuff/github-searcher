import React from "react";
import SearchForm from "./SearchForm";
import Loading from "./Loading";
import ResultField from "./ResultField";
import useSearch from "../hooks/useSearch";
import useInputState from "../hooks/useInputState";
import '../styles/Searcher.css';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function Searcher() {
  const [values, handleChange] = useInputState();
  const [user, repos, searched, searchTerm, loading, handleSubmit] = useSearch();

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

      {loading ? <Loading /> : null}
      
      {searched &&
        <ResultField
          user={user}
          repos={repos}
          searchTerm={searchTerm}
        />
      }

    </Box>
  )
}

export default Searcher;