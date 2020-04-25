import React from 'react'; 
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';  
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles ({ 
    root: {
            flexGrow: 1,
        },
        paper: {
            
            textAlign: 'center', 
            
        }, 
    form: {
        padding: '35 20px', 
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: '70px',
        resize: "none", 
        
        
        
    }
})

export default function TextAreaFile () { 
    const classes = useStyles(); 
    return (
    <div className={classes.root}> 
        <Grid container
         spacing ={3}
         direction="column"
         justify="flex-start"
         alignItems="center"> 
    <Paper> <h2> Type your feedback here! </h2> </Paper>
        <Grid item sm={'6'}> 
            <form> 
            <textarea className={classes.form} type="text" name="name" /> 
            </form>
    
        </Grid>
  
        
        <Grid item sm={'6'}> 
        
         <Button variant="contained" color="secondary"> Submit </Button>
         </Grid>
         
         </Grid>
           </div> 
       
   
    )
}