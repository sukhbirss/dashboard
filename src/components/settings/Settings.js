import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import styles from './settings.module.css'
import React from 'react';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const css = { color:"#9627ea",backgroundColor:'#f3f3f3',borderLeft:'solid 5px #9627ea' };

const useStyles = makeStyles((theme) => ({
  settings:{
    width:'90%',
    height:'90%',
    backgroundColor:"#f1f1f1",
    display:'flex',
    position:'relative',
    boxShadow: '-3px 1px 19px -6px rgba(0,0,0,0.71)',
    borderRadius:'20px',
  },
  settingsLeft:{
    width:'30%',
    height:'100%',
    backgroundColor:'white',
    zIndex:'1',
    borderRadius:'20px',
    fontSize:'22px',
    color:'#654949',
  },
  settingsRight:{
    width:'80%',
    height:'100%',
    backgroundColor:'white',
    zIndex:'2',
    borderRadius:'20px',
    position:'absolute',
    right:'0px',
    border:'solid 4px #f1f1f1',
    borderTop:'0',
    borderBottom:'0',
    borderRight:'0',
    display:'flex',
    justifyContent:'center',
  },
  content:{
    width:'60%',
    position:'relative',
    marginLeft:'-10%',
    marginTop:'5%'
  },
  content_top:{
    width:'100%',
    height:'100px',
    border:'solid 1px #e2e2e2',
    borderTop:'0',
    borderLeft:'0',
    borderRight:'0',
    fontSize:'18px',
    color:'#9627ea',
    display:'flex',
    alignItems:'center',
    position:'relative',
  },
  content_main:{
    width:'100%',
    position:'relative',
    paddingTop:'10px',
    marginLeft:'-6%',

  },
  item:{
    width:'80%',
    height:'60px',
    margin:'0 auto',
    display:'flex'
  },
  item_left:{
    width:'100%',
  },
  item_right:{
    display:'absolute',
    right:'0px'
  },
  navigation:{
    height:'45px',
    paddingLeft:'15px',
  },
  btn:{
    position:'absolute',
    bottom:'60px',
    right:'10%',
    padding:'16px 60px',
    backgroundColor:'#9627ea',
    outline:'none',
    border:'none',
    borderRadius:'10px',
    color:'white',
    fontSize:'17px'
  },
  btn2:{
    border:'solid 1px #9627ea',
    padding:'4px 25px',
    backgroundColor:'white',
    borderRadius:'10px',
    marginRight:'15px',
    color:'#9627ea'
  }
}));

function Settings() {
  const classes = useStyles();
    const [togle, setToggle] = React.useState({
    checkedA: true,
  });

    const [state, setState] = React.useState('Features');

    const handleChange = (event) => {
      setToggle({ ...state, [event.target.name]: event.target.checked });
    };

    const handleChange2 = (name) => {
      console.log(name)
      setState(name);
    };

  return (
          <div className={classes.settings}>
            <div className={classes.settingsLeft}>
              <p style={{color:'rgb(187 181 181)',padding:'0 0 0 10px'}}>Event Settings</p>
              <hr />
              <div 
                  className={classes.navigation} 
                  onClick={()=>handleChange2('Gerenal')} 
                  style={state === "Gerenal" ? css : null} >Gerenal
              </div>
              
              <div 
                  className={classes.navigation} 
                  onClick={()=>handleChange2('privacy')} 
                  style={state === "privacy" ? css : null} >privacy
              </div>
              
              <div 
                  className={classes.navigation} 
                  onClick={()=>handleChange2('Features')} 
                  style={state === "Features" ? css : null} >Features
              </div>
              
              <div 
                  className={classes.navigation} 
                  onClick={()=>handleChange2('Custmization')} 
                  style={state === "Custmization" ? css : null} >Custmization
              </div>
              
              <div 
                  className={classes.navigation} 
                  onClick={()=>handleChange2('Integration')} 
                  style={state === "Integration" ? css : null} >Integration
              </div>
              
              <div 
                  className={classes.navigation} 
                  onClick={()=>handleChange2('Session')} 
                  style={state === "Session" ? css : null} >Session Settings
              </div>
              
              <div 
                  className={classes.navigation} 
                  onClick={()=>handleChange2('Myplan')} 
                  style={state === "Myplan" ? css : null} >My plan
              </div>
            </
            div>

            <div className={classes.settingsRight}>
                <button className={classes.btn}>Save</button>
                <div className={classes.content}>
                  <div className={classes.content_top}>
                    <QuestionAnswerIcon style={{fontSize:'25px',padding:'0 10px' }} />
                    <h2>Audience Q&A</h2>
                    <div className={classes.item_right} style={{"marginLeft":'50%'}}>
                          <Switch
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </div>
                  </div>

                  <div className={classes.content_main}>
                    <div className={classes.item}>
                        <div className={classes.item_left}>
                          <h3 style={{margin:'0',fontWeight:'400'}}>Moderation</h3>
                          <p style={{margin:'1px 0',fontWeight:'100'}}>easily review question all question before they goes live</p>
                        </div>
                        
                        <div className={classes.item_right}>
                          <Switch
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </div>
                    </div>

                     <div className={classes.item}>
                        <div className={classes.item_left}>
                          <h3 style={{margin:'0',fontWeight:'400'}}>Labels</h3>
                          <p style={{margin:'1px 0',fontWeight:'100'}}>category and filter questions</p>
                        </div>
                        
                        <div className={classes.item_right}>
                          <Switch
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </div>
                    </div>

                     <div className={classes.item}>
                        <div className={classes.item_left}>
                          <h3 style={{margin:'0',fontWeight:'400'}}>Downvotes</h3>
                          <p style={{margin:'1px 0',fontWeight:'100'}}>Enable downvoting of questions</p>
                        </div>
                        
                        <div className={classes.item_right}>
                          <Switch
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </div>
                    </div>

                     <div className={classes.item}>
                        <div className={classes.item_left}>
                          <h3 style={{margin:'0',fontWeight:'400'}}>Replies</h3>
                          <p style={{margin:'1px 0',fontWeight:'100'}}>Allow participate to reply or comment on questions</p>
                        </div>
                        
                        <div className={classes.item_right}>
                          <Switch
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </div>
                    </div>

                     <div className={classes.item}>
                        <div className={classes.item_left}>
                          <h3 style={{margin:'0',fontWeight:'400'}}>Anonymous</h3>
                          <p style={{margin:'1px 0',fontWeight:'100'}}>Let your participate send anonymous questions</p>
                        </div>
                        
                        <div className={classes.item_right}>
                          <Switch
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </div>
                    </div>

                     <div className={classes.item}>
                        <div className={classes.item_left}>
                          <h3 style={{margin:'0',fontWeight:'400'}}>Maximum question length</h3>
                          <p style={{margin:'1px 0',fontWeight:'100'}}>Show number of votes instead of percentage</p>
                        </div>
                        
                        <div className={classes.item_right}>
                          <Switch
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </div>
                    </div>

                     <div className={classes.item} style={{height:'50px'}} >
                        <button className={classes.btn2} >
                          Primary
                        </button>
                        <button className={classes.btn2}>
                          Primary
                        </button>                      
                        <button className={classes.btn2}>
                          Primary
                        </button >
                    </div>

                     <div className={classes.item}>
                        <div className={classes.item_left}>
                          <h3 style={{margin:'0',fontWeight:'400'}}>Moderation</h3>
                          <p style={{margin:'1px 0',fontWeight:'100'}}>easily review question all question before they goes live</p>
                        </div>
                        
                        <div className={classes.item_right}>
                          <Switch
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </div>
                    </div>

                  </div>
                </div>
            </div>
          </div>
  );
}

export default Settings;

