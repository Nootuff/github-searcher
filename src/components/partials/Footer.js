import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Link from '@mui/material/Link';
import '../../styles/Footer.css';

function Footer() {
  return (
    <Box className="Footer" >
      <nav id="footerNav">
        <table id="footerTable">
          <tbody>
            <tr>
              <td className="Footer-item">
                <Typography className="Footer-text " color="white" > <CopyrightIcon fontSize="inherit" /> Adam Walker 2022</Typography>
              </td>
              <td className="Footer-item">
                <Typography className="Footer-text "><Link href="https://adamwalker.live/" underline="hover" color="white"  rel="noopener" target="_blank">My portfolio</Link></Typography>
              </td>
              <td className="Footer-item">
                <Typography className="Footer-text "><Link href="https://github.com/Nootuff/github-searcher" underline="hover"  rel="noopener" color="white" target="_blank">View site code on GitHub <GitHubIcon fontSize="inherit" /></Link></Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
    </Box>
  )
}

export default Footer;