import React from 'react'
import { link, BrowserRouter, Switch, Route } from 'react-router-dom'; 
import FetchLastFm from '../Components/fetchLastFm'; 
import UnderConstruction from '../Material-Ui stuff/UnderConstruction'; 
import TextAreaFile from '../Material-Ui stuff/TextAreaAuto'; 




export default function HomePage () { 
    return ( 
        <BrowserRouter> 
        <div> 
        <UnderConstruction/> 
        <Switch> 
            
            <Route path= '/fetchtop1' component= { FetchLastFm } />
            <Route path= '/fetchtop1' component = { FetchLastFm } /> 
            <Route path= '/feedback' component = { TextAreaFile } /> 
            
             

        </Switch>
        </div>
        </BrowserRouter>
    )
}
