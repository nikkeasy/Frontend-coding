import React, {useState, useEffect} from 'react'
import BiisiToiveetMUI from '../Material-Ui stuff/BiisiToiveetMUI';
import Typography from '@material-ui/core/Typography'; 



export default function HaeBiisit () {
const [biisit, setBiisit] = useState ([]);  // tyhjä taulukko koska tietoa ei ole vielä haettavana
const [virhe, setVirhe] = useState('Haetaan biisejä...');


const haeKaikkiBiisit = async () => {
    try {
        const response = await fetch('http://localhost:8080/biisitoiveet/all');
        const json = await response.json(); 
        setBiisit(json); 
        setVirhe(''); 
    }   catch (error) {
        setBiisit([]); 
        setVirhe('Virhe dataa haettaessa :( ')
    }
}

    useEffect (() => {
        haeKaikkiBiisit(); 
    },
    [])
    if (virhe.length > 0 ) {
        return (<Typography>  {virhe} </Typography> ); 
    }
    if (biisit.length > 0 ) { 
        return( <BiisiToiveetMUI biisit={ biisit} /> );
    }

    return ( <Typography> Yhtään biisiä ei löydetty </Typography>)
}

    