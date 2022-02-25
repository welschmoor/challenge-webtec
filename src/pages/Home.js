
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'



const Home = () => {
  const [dataST, setDataST] = useState([])
  const [pageST, setPageST] = useState(1)
  const [limitST, setLimitST] = useState(20) // show 20 per page
  const [loadingST, setLoadingST] = useState(true)
  console.log("dataST", dataST)


  /* limit fields:
     ... ?fields=id,title,artist_display,date_display,main_reference_number

   paginate and limit (limit per page):
     ?page=2&limit=100 */

  const api_url = `https://api.artic.edu/api/v1/artworks?page=${pageST}&limit=${limitST}&fields=id`
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
  }, [limitST]) //end useEffect

  const changeLimitHandler = (limitINT) => {
    console.log('limitINT', limitINT)
    setLimitST(Number(limitINT))
  }

  return (
    <MainWrapper>
      <select onChange={e => changeLimitHandler(e.target.value)}>
        <option value="20"  >20</option>
        <option value="50"  >50</option>
        <option value="100" >100</option>
      </select>
      {dataST.map(e => <div key={e.id}>{e.id}</div>)}
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  background-color: ${p => p.theme.BG.main2};
`

export default Home