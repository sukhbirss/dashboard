import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import Settings from '../settings/Settings';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    display:'flex',
    alignItems:'center',
    borderBottom:'solid 1px #e2e2e2',
    boxShadow: '3px 7px 14px 0px rgba(0,0,0,0.71)'
  },
  main:{
    width:'100%',
    height:'calc(100vh - 100px)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F4F6FA'
  }
}));

function TopBar() {
  const classes = useStyles();
  return (
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.root}>
                <div className={classes.nav}>
                    <MenuIcon style={{ fontSize: 40,padding:'0 10px 0 10px' }}/>
                  <h1>Admin Dashboard</h1>
                </div>
                <div className={classes.main}> 
                   <Settings />
                </div>
              </div>
            </Grid>
          </Grid>
  );
}

export default TopBar;
