import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'; 
import DrawerMUI from './DrawerComponent'; 
import { link, BrowserRouter, Switch, Route } from 'react-router-dom'; 

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      height: 430,
      width: 300,
      textAlign: 'center',
    },
    button: {
     
    }
    
  }));

  export default function UnderConstruction () {
      const classes = useStyles(); 

      return(

        
          <div className={classes.root}> 
  

  <Grid container 
  spacing={1}
  justify='flex-start'
  alignItems = 'flex-start'
  direction='row'>
      <Grid item md={3}> {/* Ilman kokomäärittelyä saa helposti keskelle.. Kokeile eri vaihtoehtoja */}
        <Paper className={classes.paper}>
        <h2> Work is under way....</h2>
        But to keep you happy.. 
        Here's a button for <b> YOU!</b>
        <br /> 
        <br /> 
        <DrawerMUI/> 
        <br /> 
        <br /> 
        JSON API-datan Fetchaus last.fm-palvelusta 
        

        </Paper>
        </Grid>

        <Grid item md={3}> 
          <Paper className = {classes.paper}> 
          
          Soon this website will flourish with Beautiful material-ui...

          But in the meanwhile you can gaze around this lovely text: 

                 <b>  LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA</b> 

          </Paper>
        </Grid>

        <Grid item md={3}> 
          <Paper className = {classes.paper}> 
            I want this item to go to the center 
            If only that would be possible...
          </Paper>
          </Grid>

          <Grid item md={3}> 
          <Paper className = {classes.paper}> 
           But it is possible indeed. Just depends on the styling ;) 
          </Paper>
         </Grid>

         <Grid item md={3}> 
          <Paper className = {classes.paper}> 
          
          </Paper>
          </Grid>

          <Grid item md={3}>  
          <Paper className = {classes.paper}> 
         
          </Paper>
          </Grid>
          </Grid>

        
         </div>
      );
  }