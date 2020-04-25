import React from 'react'; 

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'; 
import Grid from '@material-ui/core/Grid'; 
import { makeStyles } from '@material-ui/core/styles'; 
import Testforfiles from './testforfiles';
import Divider from '@material-ui/core/Divider';
import {Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core/Card'; 


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3), 
        textAlign: 'center', 
        color: theme.palette.text.secondary, 
    }, 



}));

export default function ContainerAuto () {
    const classes = useStyles(); 
    return(
        <div className={classes.root}> 
            <Grid container
             spacing={3}
             direction="row"
             alignItems="center"> 
               <Grid item xs={3}>
                
                    <Paper className={classes.paper}> <Testforfiles/>Testi </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className = {classes.paper}> 
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA
                    
                     </Paper> 
                </Grid>
                <Grid item xs={3}>
                    <Paper className = {classes.paper}> 
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA </Paper> 
                </Grid>

<Divider /> 
                <Grid item xs={6}>
                    <Paper className = {classes.paper}> 
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA
                    LOREM IPSUM JA SITÄ RATAA </Paper> 
                </Grid>

                </Grid>
        
        
        
        
        </div> 
      
    )
}