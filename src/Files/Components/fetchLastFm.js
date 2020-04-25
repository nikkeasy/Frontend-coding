import React, {useEffect, useState}  from 'react'; 
import Card from '@material-ui/core/Card'; 
import { makeStyles } from '@material-ui/core/styles';


let number = -15; 

const useStyles = makeStyles({
    cardstyle: 
    {
    border: '3px groove red',
    borderRadius: '15px',
    margin: '35px',
    maxWidth: '150px', 
        },

})
export default function FetchLastFm () {
    const classes = useStyles();
    const [biisit, setBiisit ] = useState([]);
    const [artistit, setArtistit] = useState([])
    const [virhe, setVirhe] = useState('Loading da files...');
    const fetchUrl = async () => {

        try { 
    
            const response = await fetch('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=finland&limit=5&api_key=ab29089f40be1f28c5b34468b4afb05f&format=json');
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
    <div>
        <Card>

       {biisit.map((fmdata) => (

        <p key=        { fmdata.name }> 
       Biisin nimi:    {fmdata.name}  <br />
       Listeners: {fmdata.listeners} <br /> 
       URL: {fmdata.url} <br /> 
        Artist: {fmdata.artist.name} <br/> 
       Rank:  { ++number} 
        </p> 
       )) }

    </Card>

    </div> 

 )
}
    
    //API-KEY aa90ec56063b8a21e8c959047e6b9dd6
//  { (Object.values(biisilista)).map (biisi => {
//    return( <p> { biisi.name } </p>)