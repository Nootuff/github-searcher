import ResultCard from "./cards/ResultCard";
import NoResult from "./NoResult";
import Container from '@mui/material/Container';

function ResultField({ user, repos, searchTerm }) {
  return (
    <Container sx={{ p: 0 }}>
      {user ?  /*If a user has been found render the result card or the error component.*/
        <ResultCard
          user={user}
          repos={repos}
        />
        :
        <NoResult
          searchTerm={searchTerm}
        />
      }
    </Container>
  )
}

export default ResultField;