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
    left:'0px'
  },
}));

function LeftBar() {
  const classes = useStyles();

  return (
        <div className={classes.nav}>
        </div>
  );
}

export default LeftBar;
