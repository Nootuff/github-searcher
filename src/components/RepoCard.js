import Card from "@mui/material/Card";
import Link from '@mui/material/Link';
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';

function RepoCard({ repo }) {

  const createdMod = repo.created_at.slice(0, -10).split('-').reverse().join('/');

  return (
    <Card
      raised
      id={repo.id}
      sx={{ mb: 2 }}
    >
      <CardContent align="left">
        <Typography paragraph ><Link href={repo.html_url} target="_blank" rel="noopener">{repo.name}</Link></Typography>
        <Typography paragraph><b>Created:</b> {createdMod}</Typography>
        {repo.description && <Typography paragraph><b>Description:</b> {repo.description}</Typography>}
      </CardContent>
    </Card>
  )
}

export default RepoCard;