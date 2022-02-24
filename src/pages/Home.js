
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {
  const [dataST, setDataST] = useState([])
  const [pageST, setPageST] = useState(1)
  const [loadingST, setLoadingST] = useState(true)
  console.log("dataST", dataST)


  // limit fields:
  // ... ?fields=id,title,artist_display,date_display,main_reference_number
  const api_url = `https://api.artic.edu/api/v1/artworks?page=${pageST}&fields=id`
  useEffect(() => {
    let unsub = false
    const fetchData = async () => {
      setLoadingST(true)
      try {
        const response = await axios.get(api_url)
        if (!unsub) {
          setDataST(response.data.data)
        }
        setLoadingST(false)
      } catch (error) {
        console.log(error.message)
        setLoadingST(false)
      }
    }
    fetchData()

    return () => { unsub = true }
  }, [])

  return (
    <div>
      {dataST.map(e => <div key={e.id}>{e.id}</div>)}
    </div>
  )
}

export default Home