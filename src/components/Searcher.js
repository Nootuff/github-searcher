import React from "react";
import SearchForm from "./SearchForm";
import Loading from "./Loading";
import ResultField from "./ResultField";
import Footer from "./Footer";
import useSearch from "../hooks/useSearch";
import useInputState from "../hooks/useInputState";
import '../styles/Searcher.css';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Searcher() {
  const [values, handleChange] = useInputState();
  const [user, repos, searched, searchTerm, loading, handleSubmit] = useSearch();

  return (
    <Container>
      <Box
        id="Searcher"
      >
        <section id="Searcher-header">
          <Typography variant="h4" sx={{ mt: 4 }} >GitHub User Searcher</Typography>
       
          
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
      <Footer />
    </Container>
  )
}

export default Searcher;