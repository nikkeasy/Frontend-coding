// randomapi.com API KEY: JZE9-HMWD-EJG5-614Z

import React, {useState, useEffect} from 'react';


function UserApi () {
    const [ Udata, setUdata ] = useState( { 

    });

    const [fault, setFault] = useState('Loading...');

    const fetchUrl = async () => {
        try {

        const response = await fetch('https://api.randomuser.me/');
        const json = await response.json(); 
        setFault(''); 
        setUdata( 
            {
               name: json.name
                
            }
        ); 

        } catch (error) {
            setFault("Search not succesful :( ")
        }
    }

    useEffect( () => { fetchUrl() }, [] ); 

    if (fault.length > 0) {
        return( 
            <p> {fault} </p>
        );
    }
        return(
            <div> 
            
            {fault ? <div> Loading </div> : <div> {Udata.name}</div>}
           

            </div>
        )
}
export default UserApi; 