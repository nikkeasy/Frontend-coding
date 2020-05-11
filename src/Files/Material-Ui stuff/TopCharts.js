import React from 'react'; 


import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper'; 
import Grid from '@material-ui/core/Grid'; 
import { makeStyles } from '@material-ui/core/styles'; 

import FetchLastFm from '../Components/fetchLastFm'; 
import FetchLastFmSpain from '../Components/fetchLastFmSPAIN';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


import AlbumIcon from '@material-ui/icons/Album';
import FetchLastFmSweden from '../Components/fetchLastFmSWE';
import FetchLastFmNOR from '../Components/fetchLastFmNOR';
import FetchAll from '../Components/overAllTopTracks'; 


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 'auto', 
        width: '666px',
        
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    
      },
    paper: {
        padding: theme.spacing(3), 
        textAlign: 'center', 
        color: theme.palette.text.secondary, 
    },
    expansionpanel: {
        margin: '60px', 
    }
}));

export default function TopCharts() {
    const classes = useStyles(); 
    return(
        <div className={classes.root}> 
            <Grid container
             spacing={6}
             direction="column"
             alignContent="center"
             alignItems="center">                   
                <Grid item xm className={classes.expansionpanel}> 
                    <Paper className={classes.paper}>
                    <Typography variant ="h4">   TOP LISTAT  </Typography>
                    <Typography variant ="h6">   LastFM-verkkopalvelusta haettuna </Typography>
                    <ExpansionPanel> 
                        <ExpansionPanelSummary
                          expandIcon={<AlbumIcon color="error" />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"> 

                        <Typography className={classes.heading}> TOP 10 KAPPALEET SUOMI</Typography>
                        </ExpansionPanelSummary>
                    <ExpansionPanelDetails> 
                        <FetchLastFm/> 
                    </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel> 
                        <ExpansionPanelSummary
                          expandIcon={<AlbumIcon color="error" />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"> 

                        <Typography className={classes.heading}> TOP 10 KAPPALEET ESPANJA</Typography>
                        </ExpansionPanelSummary>
                    <ExpansionPanelDetails> 
                        <FetchLastFmSpain/> 
                    </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel> 
                        <ExpansionPanelSummary
                          expandIcon={<AlbumIcon color="error" />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"> 

                        <Typography className={classes.heading}> TOP 10 KAPPALEET RUOTSI</Typography>
                        </ExpansionPanelSummary>
                    <ExpansionPanelDetails> 
                        <FetchLastFmSweden/> 
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
    
                    <ExpansionPanel> 
                        <ExpansionPanelSummary
                          expandIcon={<AlbumIcon color="error" />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"> 

                        <Typography className={classes.heading}> TOP 10 KAPPALEET NORJA</Typography>
                        </ExpansionPanelSummary>
                    <ExpansionPanelDetails> 
                        <FetchLastFmNOR/> 
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
                    
                    <ExpansionPanel> 
                        <ExpansionPanelSummary
                          expandIcon={<AlbumIcon color="error" />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"> 

                        <Typography className={classes.heading}> TOP 10 KAPPALEET KOKO MAAILMA</Typography>
                        </ExpansionPanelSummary>
                    <ExpansionPanelDetails> 
                        <FetchAll/> 
                    </ExpansionPanelDetails>
                    </ExpansionPanel>




                    </Paper> 
                </Grid>

         </Grid>
                    
                   
                
              
        
        
        
        </div> 
      
    )
}