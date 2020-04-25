import React, { useState, useEffect} from 'react'
import Drawer from '@material-ui/core/Drawer'; 
import List from '@material-ui/core/List'; 
import Button from '@material-ui/core/Button';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import IconButton from '@material-ui/core/IconButton'; 
import BorderStyleIcon from '@material-ui/icons/BorderStyle';
import CallMadeIcon from '@material-ui/icons/CallMade';
import ListItemIcon from '@material-ui/core/ListItemIcon'; 
import ListItemText from '@material-ui/core/ListItemText'; 
import ListItem from '@material-ui/core/ListItem'; 
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';






export default function DrawerMUI () { 
    const [open, setOpen] = useState(false); // Alustetaan sivupalkin 
    // alkutilaksi epätosi - eli suljettu 

    const handleOpen = () => { setOpen(true); } // tila = avattu
    const handleClose = () => { setOpen(false); } // tila = suljettu 

    return ( 
        <div> 



<IconButton onClick={ handleOpen }> <Button variant= "contained" color="secondary" > Press Here </Button>  </IconButton>            <Drawer anchor='right' open={open} onClick= { handleClose} > 
                <List> 
                    <ListItem button component= { Link } to ='fetchtop1'> 
                        <ListItemIcon><CallMadeIcon/> </ListItemIcon> 
                        <ListItemText primary='Fetch top1 song' /> 
                    </ListItem>
                    <ListItem button component= { Link } to ='fetchtop1'> 
                        <ListItemIcon><BorderStyleIcon /> </ListItemIcon>
                        <ListItemText primary='Fetch top1 song' /> 
                    </ListItem>
                    <ListItem button component= { Link } to = 'feedback'> 
                        <ListItemIcon> <BeachAccessIcon /></ListItemIcon>
                        <ListItemText primary='Feedback text box' /> 
                    </ListItem>                        
                </List>
            </Drawer>
        </div>
    )
}