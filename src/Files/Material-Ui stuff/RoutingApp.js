import React from 'react'
import { link, BrowserRouter, Switch, Route } from 'react-router-dom'; 
import DrawerMUI from './DrawerComponent';
import FetchLastFm from '../Components/fetchLastFm'
import TextAreaFile from './TextAreaAuto';


export default function Reititys () { 
    return ( 
        <BrowserRouter> 
        <div> 
        <DrawerMUI/> 
        <Switch> 
            
            <Route path= '/topcharts1' component= { FetchLastFm } />
            
            <Route path= '/feedback' component= { TextAreaFile } />
            
            
             

        </Switch>
        </div>
        </BrowserRouter>
    )
}
