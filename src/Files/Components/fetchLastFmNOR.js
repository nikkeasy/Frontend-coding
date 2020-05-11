import React, {useEffect, useState}  from 'react'; 
import {Card, CardHeader, CardMedia, CardContent, CardActions} from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'; 

import MusicNoteIcon from '@material-ui/icons/MusicNote';



const useStyles = makeStyles({
    cardstyle: 
    {
    border: '3px groove red',
    borderRadius: '25px',
    margin: '55px',
    height: '250px',
    width: '500px', 
        },

})
export default function FetchLastFmNOR () {
    const classes = useStyles();
    const [biisit, setBiisit ] = useState([]);
    const [artistit, setArtistit] = useState([])
    const [virhe, setVirhe] = useState('Loading da files...');
    const fetchUrl = async () => {

        try { 
    
            const response = await fetch('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=norway&limit=10&api_key=ab29089f40be1f28c5b34468b4afb05f&format=json');
            const json = await response.json();
             setVirhe ('');
             setBiisit(json.tracks.track);  
             setArtistit(json.tracks);
            // setArtist(json.tracks.track[0].artist); // Ei toimi.. sain aikaisemmin toimimaan mutta vahingossa poistui tiedosto ja tässä sitä nyt ollaan
            // setArtist(json.tracks.track[0].artist);
           } catch (error) {
            setVirhe("Error while fetching data :( :( "); 
        }
}
    
    useEffect( () => { fetchUrl() }, [] );


       
 return ( 
  
     <Grid container spacing={5}> 
       {biisit.map((fmdata) => (
         <Grid key=        { fmdata.name }> 
        
           <Card className={classes.cardstyle}>

    <CardHeader
        avatar= {<Avatar> <MusicNoteIcon/> </Avatar>} /> 

       <CardContent> 
      
      <Typography variant ='h6'> Biisin nimi: {fmdata.name} </Typography> 
      <Typography> Artist: {fmdata.artist.name}   </Typography>
      <Typography> URL: {fmdata.url} </Typography>
       <Typography color="secondary.main"> Listeners: {fmdata.listeners}</Typography>
       
       
       
       </CardContent>
       </Card>
       </Grid>
       )) }
)
    
    
    
</Grid>
    

 )
}
    