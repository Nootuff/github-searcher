import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function NoResult({ searchTerm /*values, handleChange, result, handleSubmit*/ }) {
  return (
    <Box>
 
 <Typography paragraph>Sorry nothing found under "<b>{searchTerm}</b>"</Typography>

</Box>
  )
}

export default NoResult;