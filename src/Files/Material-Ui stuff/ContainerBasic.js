import React from 'react'; 

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'; 
import Grid from '@material-ui/core/Grid'; 
import { makeStyles } from '@material-ui/core/styles'; 

import FetchLastFm from '../Components/fetchLastFm'; 

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

export default function ContainerBasic() {
    const classes = useStyles(); 
    return(
        <div className={classes.root}> 
            <Grid container
             spacing={6}
             direction="column"
             
             alignItems="center"> 
                <Grid item xm> 
                
                    <Paper className={classes.paper}>
                        Fetchauksen testaus ... 
                         <FetchLastFm/> Testi </Paper>
                </Grid>

                <Grid item xm>
                    <Paper className = {classes.paper}> 
                        En vielä saanut json listana mapattua dataa..
                         Todella vaikeaa
                   <FetchLastFm/> 
                    
                     </Paper> 
                </Grid>
                <Grid item xm>
                 
                     
                    <Paper className = {classes.paper}> 
                    Mutta viimeisessä versiossa pitäisi näkyä
                     mappaus viimeistään.
                    <FetchLastFm/> 
                    </Paper> 
                </Grid>
                </Grid>
        
        
        
        
        </div> 
      
    )
}