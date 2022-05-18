import React, { useState } from "react";
import SearchForm from "./SearchForm";
import Loading from "./Loading";
import ResultField from "./ResultField";
import Header from "./Header";
import Footer from "./Footer";
import Pagination from './Pagination';
import useSearch from "../hooks/useSearch";
import useInputState from "../hooks/useInputState";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../styles/Searcher.css';

function Searcher() {
  const [values, handleChange] = useInputState();
  const [user, repos, searched, searchTerm, loading, handleSubmit] = useSearch();
  const [itemsPerPage] = useState(10); //Sets number of items that can appear on each page.
  const [page, setPage] = React.useState(1);

  const indexOfLastItem = page * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentResults = repos.slice(indexOfFirstItem, indexOfLastItem);

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
          <Box>
            <ResultField
              user={user}
              repos={repos}
              searchTerm={searchTerm}

              itemsPerPage={itemsPerPage} 
               page={page} 
               setPage={setPage}
            />
          </Box>
        }

      </Box>

      <Footer />
    </Container>
  )
}

export default Searcher;