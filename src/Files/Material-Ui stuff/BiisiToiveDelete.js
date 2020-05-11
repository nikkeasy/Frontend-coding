import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Delete } from '@material-ui/icons';

const url = 'http://localhost:8080';


class BiisiToiveDelete extends Component {
  constructor(props) {
      super(props);
      this.state = {  biisitoiveet: this.props.biisitoiveet, virhe: '' };
  }

  poista = (id) =>  {
    return fetch(url + "/biisitoiveet/delete/" + id)
     .then((response) => response.json())
     .then((responseJson) => {
       this.setState(prevState => ({ biisitoiveet: prevState.biisitoiveet.filter(biisi =>
         biisi.id !== id)
        }));
     })
     .catch((error) => {
        this.setState({virhe: 'Tietojen poisto epäonnistui :('});
     })
  }

  render () {

    if (this.state.biisitoiveet.length === 0 && this.state.virhe.length === 0) {
      return (<Typography variant='body1'>Yhtään biisiä ei ole</Typography>)
    }
    if (this.state.virhe.length > 0) {
      return(<Typography variant='body1'>{ this.state.virhe }</Typography>)
    }
    return (
      <Grid container spacing={24} >
      {  this.state.biisitoiveet.map(biisi => {
              return(
                <Grid item key={biisi.id} >
                  <Card style={{ maxWidth: 350, minWidth: 350 }}>
                  <CardHeader
                    title={ biisi.biisin_nimi.toUpperCase() }
                    subheader={ biisi.artistin_nimi } />

                    <CardContent>

                   

                     
                       <Typography variant='body1'>{ biisi.username }</Typography>
                       <div style={ {textAlign: 'center', marginTop: 10} }>
                         <Button onClick={this.poista.bind(this, biisi.id)}><Delete /></Button>
                         
                       </div>
                    </CardContent>
                  </Card>
                </Grid>
              )
          })
       }
      </Grid>
    );
  }

}

export default BiisiToiveDelete;
