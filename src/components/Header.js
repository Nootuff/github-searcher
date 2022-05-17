import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../styles/Header.css';

function Header() {
  return (
    <AppBar id="Header">
      <Toolbar>
        <Typography variant="h4" id="Header-logo" sx={{ py: 2 }}>GitHub Searcher</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;