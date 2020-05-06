import React from 'react'; 
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'; 

const url = "http://localhost:8080"

export default function BiisiToiveetMUI(props) { 
    return ( 
        <Grid container spacing={12}> 
        { props.biisit.map(biisi => {
    return ( 
       <Grid key= { biisi.id}> 
       
         Biisin nimi:   {biisi.biisin_nimi} <br />
         Artisti:    {biisi.artistin_nimi} <br />
         Käyttäjä joka pyytänyt kyseistä biisiä:   <br/> {biisi.username }
         <p> Testi </p>
 
     </Grid>
       
            )} 
        
        )}
        </Grid>
        
    );
}