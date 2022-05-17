import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//import Item from "@mui/material/Item";

function NoResult({ searchTerm }) {
  return (
    <Box   sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2,  borderRadius: 1, mt: 2 }}>
  <div>
 <Typography paragraph>Sorry nothing found under "<b>{searchTerm}</b>"</Typography>
 </div>
</Box>
  )
}

export default NoResult;