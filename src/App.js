import React from 'react';
import './App.css';
import ApplicationBar from './Files/Material-Ui stuff/Appbar'
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import BiisiEditLomake from './Files/Material-Ui stuff/BiisiEditLomake'; 


import HomePage1 from './Files/Material-Ui stuff/HomePage1';
import TopCharts from './Files/Material-Ui stuff/TopCharts';
import ListaaToiveet from './Files/Material-Ui stuff/ListaaToiveet';
import FeedBack from './Files/Material-Ui stuff/FeedBack';
import LisaaBiisiToiveLomake from './Files/Material-Ui stuff/LisaaBiisiToiveLomake';
import BiisiToiveDelete from './Files/Material-Ui stuff/BiisiToiveDelete'; 


function App() {
  return (
    <BrowserRouter> 
    <div> 
    <ApplicationBar/> 
    <Switch> 
    <Route path='/' exact component= { HomePage1 } /> 
    <Route path ='/lisaa' component={LisaaBiisiToiveLomake} /> 
    <Route path ='/topcharts/' component={ TopCharts } /> 
    <Route path='/songrequest' component = {ListaaToiveet} /> 
    <Route path='/feedback' component = { FeedBack} /> 
    <Route path ='/delete/:id' component = { BiisiToiveDelete } /> 
    <Route path='/edit/:id/:biisin_nimi/:artistin_nimi/:username' component= {BiisiEditLomake} /> 
   
    </Switch>
    </div>
    </BrowserRouter>
    
  )
}

export default App;
