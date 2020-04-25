

import {Card, CardHeader, CardMedia, CardContent, CardActions} from '@material-ui/core'; 
import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


function fetchListaus () {
    return(
        <Grid container spacing={3}
        direction="row"
        justify="space-evenly"
        alignItems="stretch">

 {  
  tracks.map(data => {
            return ( 
            <Grid key={ data.track}> 
                <Card style={ {minWidth: 350, minHeight: 400} }>
                    <CardHeader title={data.name} subheader={data.artist}>
                        
                    </CardHeader>
                
                    <CardContent> 
                        <Typography variant = 'h5'> {  } </Typography>
                        <Typography> { } </Typography>
                {
                    <CardMedia
                    style={{height: 300, width: 200}}/>
                    
                 } </CardContent> 
      
        </Card>
    </Grid>
            )} 
         )}
</Grid>
    ); 
            }  


export default fetchListaus; 