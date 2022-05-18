import ResultCard from "./ResultCard";
import NoResult from "./NoResult";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


function ResultField({ user, repos, searchTerm }) {
  return (
    <Container>
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