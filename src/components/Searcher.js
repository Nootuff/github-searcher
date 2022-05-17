import React from "react";
import SearchForm from "./SearchForm";
import Loading from "./Loading";
import ResultField from "./ResultField";
import Header from "./Header";
import Footer from "./Footer";
import useSearch from "../hooks/useSearch";
import useInputState from "../hooks/useInputState";
import '../styles/Searcher.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Searcher() {
  const [values, handleChange] = useInputState();
  const [user, repos, searched, searchTerm, loading, handleSubmit] = useSearch();

  return (
    <Container>
       <Header />
      <Box id="Searcher">
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