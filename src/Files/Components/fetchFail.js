import React, { useEffect, useState } from "react"


export default function Example() {
    const [tracks, setTracks] = useState([])

  
    useEffect(() => {
        fetch("http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=finland&limit=5&api_key=ab29089f40be1f28c5b34468b4afb05f&format=json")
          .then(response => response.json())
          .then(data => {
            setTracks(tracks) // new
          })
      }, [])


    return (
        <div>
          <h1>Cool app</h1>
          {tracks.length > 0 ? (
            tracks.map(item => (
            <div>
                <h2>{item.tracks.track.name}</h2>
                </div> 
             
            ))
          ) : (
            <h1>Loading posts...</h1>
          )}
        </div>
      )
    }