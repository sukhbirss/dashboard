import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import right from './right2.png'

const useStyles = makeStyles((theme) => ({
  nav: {
    width:'100px',
    height:'100vh',
    backgroundColor:'white',
    position:'fixed',
    zIndex:'1',
    right:'0px',
    top:'0px',
    boxShadow: '3px 7px 14px 0px rgba(0,0,0,0.71)'

  },
  img:{
    margin:'10px 20px',
  }
}));

function RightBar() {
  const classes = useStyles();
  return (
          <Grid container>
            <Grid item xs={12} sm={1} md={1}>
              <div className={classes.nav}>
                <img src={right} className={classes.img} />
              </div>
            </Grid>
          </Grid>
  );
}

export default RightBar;
