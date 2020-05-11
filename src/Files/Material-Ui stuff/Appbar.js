import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';


import Tab from '@material-ui/core/Tab'; 
import Tabs from '@material-ui/core/Tabs'; 

import MusicNoteIcon from '@material-ui/icons/MusicNote';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Replay10Icon from '@material-ui/icons/Replay10';

import FeedbackIcon from '@material-ui/icons/Feedback';
import TopCharts from './TopCharts'; 
import FeedBack from './FeedBack';
import ListaaToiveet from './ListaaToiveet'; 
import HomePage1 from './HomePage1'; 

import { Link } from 'react-router-dom';









const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
        background: 'linear-gradient(45deg, #de4063 15%, #1c1b1a 95%)', 
        borderRadius: 3
    },
    menuButton: {
        marginLeft: theme.spacing(1), 
    },
    title: {
        flexGrow: 1, 
    },
    
  

}));

    export default function ApplicationBar () {
        const classes = useStyles (); 
        const [value, setValue] = useState(0);

        const handleChange = (event, val) => {
            setValue( val ); 
        }


        return( 
            
    <div> 
        <AppBar position="static" className={classes.root}> 
            <Tabs value={ value }  onChange={ handleChange }>
 
                <Tab onClick={handleChange} component={ Link } to='/' 
                label='Home Page' icon={<MusicNoteIcon color = "inherit"/>} />
                <Tab onClick={handleChange} component={ Link } to='/topcharts'
                 label='Top Charts (10)' icon = {<Replay10Icon/>} /> 
                <Tab onClick={handleChange} component={ Link } to='/songrequest'
                 label='Song request' icon = {<BorderColorIcon/>} /> 
                <Tab onClick={handleChange} component={ Link } to='/feedback'
                 label='Feedback' icon = {<FeedbackIcon/>} />
                  
            </Tabs>
            </AppBar>
            { value === 0 &&    <HomePage1 /> }
            { value === 1 &&  <TopCharts />  }
            { value === 2 &&  <ListaaToiveet/>}
            { value === 3 && <FeedBack/>}
          
            
    </div>

        )
}