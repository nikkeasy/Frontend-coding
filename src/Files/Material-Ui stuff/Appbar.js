import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Tab from '@material-ui/core/Tab'; 
import Tabs from '@material-ui/core/Tabs'; 
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ContainerFixed from './ContainerFixed'; 
import Testforfiles from './testforfiles'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';
import UserApi from '../Components/userApi';
import TopResults from '../Mainfile';
import Mainfile from '../Mainfile';
import Replay10Icon from '@material-ui/icons/Replay10';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import TextFieldC from './SongRequest';

import TextAreaFile from './TextAreaAuto';
import FeedbackIcon from '@material-ui/icons/Feedback';
import UnderConstruction from './UnderConstruction';
import ContainerNumber1 from '../Material-Ui stuff/ContainerBasic'; 
import HomePage from '../Material-Ui stuff/Homepage'; 
import FetchLastFm from '../Components/fetchLastFm'; 
import SongRequest from './SongRequest';








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
 
                <Tab label='X' icon={<MusicNoteIcon color = "inherit"/>} />
                <Tab label='FAQ' icon = {<QuestionAnswerIcon/>} />
                <Tab label='Top Charts (10)' icon = {<Replay10Icon/>} /> 
                <Tab label='Song request' icon = {<BorderColorIcon/>} /> 
                <Tab label='Categories' icon = {<LibraryMusicIcon/>} /> 
                <Tab label='Feedback' icon = {<FeedbackIcon/>} />
            </Tabs>
            </AppBar>
            { value === 0 &&    <HomePage /> }
            { value === 1 &&  <ContainerFixed /> }
            { value === 2 &&  <ContainerNumber1/>  }
            { value === 3 &&  <SongRequest/>}
            { value === 4 &&  <FetchLastFm/>}
            { value === 5 && <TextAreaFile/>}
            
    </div>

        )
}