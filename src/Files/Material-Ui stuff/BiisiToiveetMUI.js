import React from 'react'; 
import Grid from '@material-ui/core/Grid'; 
import Avatar from '@material-ui/core/Avatar'; 

import { Link } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, CardContent, CardActions} from '@material-ui/core'; 

import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';




const url = "http://localhost:8080"; 


const useStyles = makeStyles({
    cardstyle: 
    {
    border: '3px groove blue',
    borderRadius: '25px',
    margin: '55px',
    height: '250px',
    width: '300px', 
        },

})

export default function BiisiToiveetMUI(props) { 
    const classes = useStyles();

    return ( 
        <Grid container spacing={3}> 
        { props.biisit.map(biisi => {
    return ( 
       <Grid key= { biisi.id}> 

       <Card className={classes.cardstyle}> 
       <CardHeader 
       avatar= {<Avatar> <ArtTrackIcon/>   </Avatar>} />  

       <CardContent> 
         
         Biisin nimi:   <b> {biisi.biisin_nimi} </b> <br />
         Artisti:   <b> {biisi.artistin_nimi} </b> <br />
         Käyttäjä joka pyytänyt kyseistä biisiä:   <br/> <b> {biisi.username }</b>
         </CardContent>
        <CardActions>
        <div className={classes.button}> 
        <IconButton component={ Link } to={ '/edit/' + biisi.id +
                    '/' + biisi.biisin_nimi + '/' + biisi.artistin_nimi + '/' + biisi.username }>
                        <EditIcon  className={ classes.icon } /></IconButton>


                    
        <IconButton component={ Link } to={ '/delete/' + biisi.id +
                    '/' + biisi.biisin_nimi + '/' + biisi.artistin_nimi + '/' + biisi.username }>
                    <DeleteIcon className = {classes.icon} /> </IconButton>
        </div>
        </CardActions> 

         </Card>
     </Grid>
      
    )} 
        )}
    </Grid>
    );
}