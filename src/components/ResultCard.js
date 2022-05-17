
import React from "react";
/*import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';

import '../styles/SearchForm.css'; */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function ResultCard({ result/* values, handleChange, result, handleSubmit */ }) {
  return (
    <Card
    className="Result-card"
    raised
     sx={{ width: '50%' }} align="center" >

      <CardContent align="left">
        
          <div>
            <CardMedia
            sx={{ width: 1/4 }}
            component="img"
            image={result.avatar_url}
            alt="Profile image here"
            ></CardMedia>
             <Typography variant="h4">
             <Link href={result.html_url} target="_blank" rel="noopener">{result.login}</Link>
                </Typography>
                <Typography variant="h4">
             {/*<Link href={result.html_url} target="_blank" rel="noopener">Twitter</Link> USE STRING TEMPLATES TO GET TWITTER WORKING */}
                </Typography>
            <Typography paragraph ><b>ID: </b>{result.id}</Typography>
            <Typography paragraph ><b>Location: </b>{result.location}</Typography>
           {/* <Typography paragraph ><b>Followers: </b>{result.followers_url.length}</Typography>    
            <Typography paragraph ><b>Following: </b>{result.following_url.length}</Typography>    If you can't get it working abandon this part */}
            <Typography paragraph><b>Bio: </b>{result.bio}</Typography>


          </div>
         {/* :
          <Typography paragraph>Sorry nothing found</Typography>
        } */}
      </CardContent>
    </Card>
  )
}

export default ResultCard;


