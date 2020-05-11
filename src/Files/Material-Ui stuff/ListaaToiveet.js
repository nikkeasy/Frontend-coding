import React from 'react'; 


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import HaeBiisit from '../FrontBack/HaeBiisit';
import LisaaBiisiToiveLomake from './LisaaBiisiToiveLomake';
import BiisiToiveDelete from './BiisiToiveDelete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 'auto',
    
  },
  control: {
    padding: theme.spacing(2),
  },
  item: {
      margin: '77px', 
  }
}));

export default function ListaaToiveet () { 

    const classes = useStyles();

    return (
        <Grid container className={classes.root}
         spacing={2}
         direction="column"
         alignContent="center">
          <Grid item xs={12} className={classes.item}>
            <Grid container justify="center">
             
            
                  <Paper className={classes.paper} >
                  <LisaaBiisiToiveLomake/> 
                  </Paper>
                </Grid>
           
            </Grid> 
          
       

      
        <Grid item xs={12} className={classes.item}>
         
           
          <h2> Käyttäjien toivomia biisejä </h2>
                <Paper className={classes.paper} >
                <HaeBiisit /> 
                </Paper>
              </Grid>
              </Grid>
         
          
        
    )
}