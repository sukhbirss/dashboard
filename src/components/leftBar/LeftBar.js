import { makeStyles } from '@material-ui/core/styles';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import IconButton from '@material-ui/core/IconButton';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TimelineIcon from '@material-ui/icons/Timeline';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import logo from './logo.png'
import React from 'react';
const css = {border:'solid 2px #9627ea' };

const useStyles = makeStyles((theme) => ({
  nav: {
    width:'100px',
    height:'100vh',
    backgroundColor:'white',
    position:'fixed',
    left:'0px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    boxShadow: '-3px 1px 14px 0px rgba(0,0,0,0.71)'
  },
  icon_container:{
    height:'80px',
    width:'80px',
    borderRadius:'10px',
    margin:'5px auto',
    display:'flex',
    justifyContent:'center'
  },
}));

function LeftBar() {
  const classes = useStyles();
  const [state, setState] = React.useState('stats');

  return (
        <div className={classes.nav}>
          <div className={classes.icon_container} >
            <img src={logo} />
          </div>
          <div className={classes.icon_container} onClick={()=>setState('stats')} style={state === "stats" ? css : null}>
            <IconButton aria-label="friend">   
              <AssessmentIcon style={{ fontSize: 40, color:'#9627ea',padding:'0' }}/>
            </IconButton>
          </div>
          <div className={classes.icon_container} onClick={()=>setState('group')} style={state === "group" ? css : null}>
            <IconButton aria-label="friend">   
              <PeopleOutlineIcon style={{ fontSize: 40, color:'#9627ea',padding:'0' }}/>
            </IconButton>
          </div>
          <div className={classes.icon_container} onClick={()=>setState('graph')} style={state === "graph" ? css : null}>
            <IconButton aria-label="friend">   
              <TimelineIcon style={{ fontSize: 40, color:'grey',padding:'0' }}/>
            </IconButton>
          </div>
          <div className={classes.icon_container} onClick={()=>setState('archive')} style={state === "archive" ? css : null}>
            <IconButton aria-label="friend">   
              <AllInboxIcon style={{ fontSize: 40, color:'grey',padding:'0' }}/>
            </IconButton>
          </div>
        </div>
  );
}

export default LeftBar;
