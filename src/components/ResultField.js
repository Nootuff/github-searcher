import ResultCard from "./ResultCard";
import NoResult from "./NoResult";
import Pagination from './Pagination';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


function ResultField({ user, repos, searchTerm }) {
  return (
    <Container>
      {user ?  /*If a user has been found render the result card or the error component.*/
        <Box>
        <ResultCard
          user={user}
          repos={repos}
        />
<Pagination /*itemsPerPage={itemsPerPage} totalItems={repos.length} page={page} setPage={setPage} */ />
</Box>
        :
        <NoResult 
          searchTerm={searchTerm}
        />
      }
    </Container>
  )
}

export default ResultField;