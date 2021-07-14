import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'calc(100% - 200px)',
    height:'100vh',
    position:'fixed',
    zIndex:'-1',
    padding:' 0 100px',
  },
  nav:{
    width:'100%',
    height:'100px',
    border:'solid 1px black'
  },
  main:{
    width:'100%',
    height:'calc(100vh - 100px)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  settings:{
    width:'90%',
    height:'90%',
    backgroundColor:"#f1f1f1",
    display:'flex',
    position:'relative',
  },
  settingsLeft:{
    width:'30%',
    height:'100%',
    backgroundColor:'#e2e2e2',
    zIndex:'1',
    border:"solid 1px black",
    borderRadius:'20px',
  },
  settingsRight:{
    width:'80%',
    height:'100%',
    backgroundColor:'grey',
    zIndex:'2',
    border:"solid 1px black",
    borderRadius:'20px',
    position:'absolute',
    right:'0px'

  }
}));

function TopBar() {
  const classes = useStyles();
  return (
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.root}>
                <div className={classes.nav}>
                </div>
                <div className={classes.main}> 
                  <div className={classes.settings}>
                    <div className={classes.settingsLeft}>
                    </div>
                    <div className={classes.settingsRight}>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
  );
}

export default TopBar;
