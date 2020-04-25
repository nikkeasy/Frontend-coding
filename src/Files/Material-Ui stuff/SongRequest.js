import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 350,
      
    },
  },
}));

export default function TextFieldC() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
     
      <div>
        <TextField
          label="Track to be requested"
          id="filled-size-large"         
          variant="filled"
          size="large"
        />
        <TextField label="Artist" id="filled-size-normal" defaultValue="" variant="filled" />
      </div>
      <Button variant="contained" color="primary"> Submit </Button>
      </form>
     
  );
}
      