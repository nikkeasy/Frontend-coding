import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'; 

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '44px',
    },
    paper: {
      padding: theme.spacing(3),
      height: 430,
      width: 300,
      textAlign: 'center',
    }, 
    
  
   
   
     
    
    
  }));

  export default function HomePage1 () {
      const classes = useStyles(); 

      return(

        
          <div> 
  

  <Grid className={classes.root} container 
  spacing={1}
  justify='center'
  alignItems = 'center'
  direction='row'>
      <Grid className={classes.item} item md={3}> {/* Ilman kokomäärittelyä saa helposti keskelle.. Kokeile eri vaihtoehtoja */}
        <Paper className={classes.paper}>
        <h2> Kotisivu</h2>
    
        <p>Tällä sivulla voit:  </p>  
        <li>Selata hittilistoja</li> 
        <li> Tallettaa dataa tietokantaan </li>
        <li> Muokata olemassa olevaa dataa</li>
        <li> Poistaa dataa kannasta </li>
        </Paper>
        </Grid>


    
</Grid>
        
         </div>
      );
  }