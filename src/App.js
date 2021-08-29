import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import ParentApp from './ParentApp';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  box: {
    color: 'blue',
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <ParentApp />
    // <Container maxWidth="false">
    //   <Box my={4} className={classes.box}>
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Create React App v4-beta example
    //     </Typography>
    //     <ProTip />
    //     <Copyright />
    //   </Box>
    // </Container>
  );
}
