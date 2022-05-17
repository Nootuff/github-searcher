import ResultCard from "./ResultCard";

import NoResult from "./NoResult";

import Box from '@mui/material/Box';

function ResultField({ result, searchTerm /*values, handleChange, result, handleSubmit*/ }) {
  return (
    <Box>
      ResultField
      {result ? 
      <ResultCard
        result={result}
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