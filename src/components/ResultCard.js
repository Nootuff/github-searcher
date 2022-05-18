import React from "react";
import RepoCard from "./RepoCard";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import '../styles/ResultCard.css';
import "../styles/index.css";

function ResultCard({ user, repos }) {

  const repoList = repos.map((repo) =>
    <RepoCard
      key={repo.id}
      repo={repo}
    />
  );

  return (
    <Card
      id="Result-card"
      raised
    >
      <CardContent align="left">
        <CardMedia
          sx={{ width: 2 / 4 }}
          component="img"
          image={user.avatar_url}
          alt="Profile image here"
        ></CardMedia>
        <Typography variant="h4">
          <Link href={user.html_url} target="_blank" rel="noopener">{user.login}</Link>
        </Typography>

        <Typography paragraph ><b>Profile ID: </b>{user.id}</Typography>

        {user.name && <Typography paragraph ><b>Name: </b>{user.name}</Typography>}

        {user.location && <Typography paragraph ><b>Location: </b>{user.location}</Typography>}

        {user.twitter_username && <Typography paragraph>
          <Link href={`https://twitter.com/${user.twitter_username}`} underline="hover" target="_blank" rel="noopener"><b>Twitter</b></Link>
        </Typography>}

        {user.blog && <Typography paragraph>
          <Link href={user.blog} underline="hover" target="_blank" rel="noopener"><b>Personal site</b></Link>
        </Typography>}

        {user.bio && <Typography paragraph><b>Bio: </b>{user.bio}</Typography>}

        {repos.length && <Typography paragraph><b>Code repos: </b></Typography>}

        {repoList}

      </CardContent>
    </Card>
  )
}

export default ResultCard;


