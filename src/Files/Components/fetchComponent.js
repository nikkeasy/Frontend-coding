import { useEffect, useState} from 'react'

export const useLastFm = () => {
    // tarpeelliset tilat 
        const [charts, setCharts ] = useState([]);
        const [loading, setLoading] = useState(true); 
        const [error, setError] = useState(null); 

  useEffect(() => {

    // First we set the loading and error states
    setLoading(true)
    setError(null)

    fetch('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=finland&limit=5&api_key=ab29089f40be1f28c5b34468b4afb05f&format=json')
      .then(res => res.json()) // res = response 
      .then(json => {
        setLoading(false)
        if (json.charts) {
          setCharts(json.charts)
        } else {
          setCharts([])
        }
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])
  return { charts, loading, error }
}
