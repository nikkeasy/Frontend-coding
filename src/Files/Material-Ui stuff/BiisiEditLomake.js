import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';

import axios from 'axios';

import { useParams } from 'react-router';


const url = 'http://localhost:8080';

export default function BiisiEditLomake () {
    let { id, biisin_nimi, artistin_nimi, username} = useParams();


// tilamuuttujat ja niiden muuttamiskutsu
  const [biisit, setValues] = useState({
      id: id,
      biisin_nimi: biisin_nimi,
      artistin_nimi: artistin_nimi,
      username: username, 
      
      
  });

  const [viesti, setViesti] = useState('');

// Funktio, jolla muutetaan tilaa
  const muuta = (e) => {
     setValues({
       ...biisit,
       [e.target.name]: e.target.value
     });
   };



// Funktio painikkeen painallukselle
  const muokkaaBiisi = (e) => {
    e.preventDefault();
 
    const formData = { 
      'id' : biisit.id,
      'biisin_nimi' : biisit.biisin_nimi,
      'artistin_nimi' : biisit.artistin_nimi, 
      'username' : biisit.username, 
    }

    axios.post(url + '/edit/' + biisit.id, formData)
    .then(response => {
        if (response.status === 200) {
            setValues( {id: '', biisin_nimi: '', artistin_nimi: '', username: ''} );
            setViesti('Muutokset suoritettu');
        } 
        else {
            setViesti('Muutos ei onnistunut');
            } 
        }
    )
     
}


  

  const tyhjenna = (e) => {
    e.preventDefault();
    setValues({
        biisin_nimi: '',
        artistin_nimi: '',
        username: ''
    });
    setViesti('Lomake tyhjennetty')
  }



  return (
    <Paper style={ {padding:'10px', margin:'30px'} }>
    <form onSubmit={muokkaaBiisi}>
      <TextField label='Biisi' name='biisin_nimi' value={ biisit.biisin_nimi }
      onChange={ muuta } margin='normal' required fullWidth
      autoFocus />
      
      <TextField label='Artisti' name='artistin_nimi' value={ biisit.artistin_nimi }
      onChange={ muuta } margin='normal' required fullWidth />
      <TextField label='Käyttäjä' name='username' value={ biisit.username }
      onChange={ muuta } margin='normal' required fullWidth />
     
      <div style={ {textAlign: 'center'} }>
        <Button onClick={muokkaaBiisi} variant='contained' color='primary' style={ {marginRight:20} }><CreateIcon /> Lähetä tiedot </Button>
        <Button onClick={tyhjenna} variant='contained' color='secondary'><ClearIcon /> Tyhjennä</Button>
      </div>
    </form>
    </Paper>
  );
}
