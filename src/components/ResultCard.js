
import React from "react";

import RepoCard from "./RepoCard";

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

function ResultCard({ user, repos/* values, handleChange, result, handleSubmit */ }) {

  const repoList = repos.map((repo) =>
  <RepoCard
  key={repo.id}
   repo={repo}

   />
/*<li>{repo.name}</li>*/
 );

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
            image={user.avatar_url}
            alt="Profile image here"
            ></CardMedia>
             <Typography variant="h4">
             <Link href={user.html_url} target="_blank" rel="noopener">{user.login}</Link>
                </Typography>
                
             <Typography paragraph ><b>ID: </b>{user.id}</Typography>
             {user.location && <Typography paragraph ><b>Location: </b>{user.location}</Typography> }
             {user.twitter_username && <Typography paragraph>
             <Link href={`https://twitter.com/${user.twitter_username}`} underline="hover" target="_blank" rel="noopener">Twitter</Link> 
                </Typography> }
           {/* <Typography paragraph ><b>Followers: </b>{result.followers_url.length}</Typography>    
            <Typography paragraph ><b>Following: </b>{result.following_url.length}</Typography>    If you can't get it working abandon this part */}
            {user.bio && <Typography paragraph><b>Bio: </b>{user.bio}</Typography> }

            {repos.length && <Typography paragraph><b>Repos: </b></Typography> }
 
{repoList}
 

            {/* <Typography paragraph ><b>Location: </b>{result.repos_url}</Typography> */}
          </div>
         {/* :
          <Typography paragraph>Sorry nothing found</Typography>
        } */}
      </CardContent>
    </Card>
  )
}

export default ResultCard;


