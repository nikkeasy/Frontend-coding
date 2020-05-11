import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';

const url = 'http://localhost:8080';

function BiisiLomakeMUI () {
// tilamuuttujat ja niiden muuttamiskutsu
  const [biisit, setValues] = useState({
      biisin_nimi: '',
      artistin_nimi: '',
      username: ''
  });

  const [viesti, setViesti] = useState('');

// Funktio, jolla muutetaan tilaa
  const muuta = (e) => {
     setValues({
       ...biisit,
       [e.target.name]: e.target.value
     });
   }

 

 
// Funktio painikkeen painallukselle
  const lisaaBiisit = (e) => {
    e.preventDefault();

    const formData = {
    'biisin_nimi': biisit.biisin_nimi,
    'artistin_nimi': biisit.artistin_nimi,
    'username': biisit.username,
    }
    axios.post(url + '/biisitoiveet/add', formData)
      .then(response => {
          if (response.status === 200) {
              setValues({
                  biisin_nimi: '',
                  artistin_nimi: '',
                  username: ''
              });
              setViesti('Lisättiin');
          } else {
              setViesti('Lisäys ei onnistunut');
            }
      })
  }
   

  const tyhjenna = (e) => {
    e.preventDefault();

    setValues({
        biisin_nimi: '',
        artistin_nimi:'',
        username: ''
    });
  }



  return (
    <Paper style={ {padding:'10px', margin:'30px'} }>
    <form>
      <TextField label='Biisin nimi' name='biisin_nimi' value={ biisit.biisin_nimi }
      onChange={ muuta } margin='normal' required fullWidth
      autoFocus />
      { /*
      <TextField label='Päivä' name='paiva' value={ matka.paiva }
      onChange={ muuta }  margin='normal' required fullWidth />
      */ }
      
      <TextField label='Artisti' name='artisti' value={ biisit.artistin_nimi}
      onChange={ muuta } margin='normal' required fullWidth />
      <TextField label='Käyttäjä' name='user' value={ biisit.username }
      onChange={ muuta } margin='normal' required fullWidth />
     
  
      <div style={ {textAlign: 'center'} }>
        <Button onClick={ (e) => lisaaBiisit(e)} variant='contained' color='primary' style={ {marginRight:20} }><CreateIcon /> Lisää</Button>
        <Button onClick={tyhjenna} variant='contained' color='secondary'><ClearIcon />Tyhjennä</Button>
      </div>
    </form>
    <Typography style={ {marginTop: 20} }>{ viesti }</Typography>
    </Paper>
  );
}

export default BiisiLomakeMUI;
