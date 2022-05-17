import ResultCard from "./ResultCard";
import NoResult from "./NoResult";
import Box from '@mui/material/Box';

function ResultField({ user, repos, searchTerm }) {
  return (
    <Box>
      {user ?
        <ResultCard
          user={user}
          repos={repos}
        />
        :
        <NoResult
          searchTerm={searchTerm}
        />
      }
    </Box>
  )
}

export default ResultField;