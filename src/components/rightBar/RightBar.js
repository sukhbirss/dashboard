import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nav: {
    width:'100px',
    height:'100vh',
    border:'solid 1px black',
    backgroundColor:'white',
    position:'fixed',
    zIndex:'1',
    right:'0px',
    top:'0px,'
  }
}));

function RightBar() {
  const classes = useStyles();
  return (
          <Grid container>
            <Grid item xs={12} sm={1} md={1}>
              <div className={classes.nav}>
              </div>
            </Grid>
          </Grid>
  );
}

export default RightBar;
