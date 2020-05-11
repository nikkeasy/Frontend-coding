import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



const url = "http://localhost:8080";
const LisaaBiisiToiveLomake = () => {
    let {haettuBiisi, haettuArtisti, haettuUser} = useParams();
    const [viesti, setViesti] = useState('');
    const [toive, setValues] = useState(
        {
            nimi: haettuBiisi,
            osoite: haettuArtisti,
            kuva: haettuUser,
        } );
        
    const lisaaToive = (e) => {
        e.preventDefault();

        const formData = {
            'biisin_nimi' : toive.biisin_nimi,
            'artistin_nimi' : toive.artistin_nimi,
            'username' : toive.username,
        }

        axios.post(url + '/biisitoiveet/add', formData)
            .then(response => {
                if (response.status === 200) {
                    console.log(toive.biisin_nimi + '' + toive.artistin_nimi + ' Lisätty!');
                    setValues( {biisin_nimi: '', artistin_nimi: '', username: ''} );
                    setViesti('Lisätty!');
                } 
                else {
                    setViesti('Lisäys ei onnistunut');
                    } 
                }
            )
            window.location.reload(false);
        }

    const tyhjenna = (e) => {
        e.preventDefault();
        setValues({
            biisin_nimi: '',
            artistin_nimi: '',
            username: '',
        });
        setViesti('tyhjennetty');
      };

      const muuta = (e) => {
          setValues({
              ...toive,
              [e.target.name]: e.target.value
          });
      }

return (
<Paper style={{margin: '20px'}}>
    <form onSubmit={ lisaaToive } style={{margin: '20px'}}>
        <TextField label='Kappaleen nimi'
        variant="filled"
        size="large" name='biisin_nimi' value={ toive.biisin_nimi }
            onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} autoFocus/>

        <TextField label='Artisti' 
         variant="filled"
         size="large" name='artistin_nimi' value={ toive.artisti }
            onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} />

        <TextField label='Käyttäjätunnus'
         variant="filled"
         size="large" name='username' value={ toive.username }
            onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} />
        
              <Button style={{margin: '10px', padding: '15px'}} onClick={ (e) => lisaaToive(e) } variant="contained" color="primary"><CreateIcon />Lisää</Button>
              <Button style={{margin: '10px', padding: '15px'}} onClick={ (e) => tyhjenna(e) } variant="contained" color="secondary"><ClearIcon />Tyhjennä</Button>
              <Button style={{margin: '10px', padding: '15px'}} variant="outlined" color="secondary" component={Link} to = {'/'}><ClearIcon />Takaisin</Button>
    </form>
</Paper>
);
}

export default LisaaBiisiToiveLomake;