import { Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid container spacing={2} bgcolor={'red'}>
      <Grid item bgcolor={'orange'}>
        <Typography variant="h4">Main Title</Typography>
      </Grid>
    </Grid>
  );
}
