
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { VscTriangleUp } from "react-icons/vsc"
import ArtCard from "../components/ArtCard"
// Zum ersten mal im Leben die Pagination mit REST gemacht (bisher nur in GraphQL)

const Home = () => {
  const [dataST, setDataST] = useState([])
  const [pageST, setPageST] = useState(1)
  const [limitST, setLimitST] = useState(20) // show 20 per page
  const [loadingST, setLoadingST] = useState(true)
  console.log("dataST", dataST)
  console.log("pageST", pageST)


  /* limit fields:
     ... ?fields=id,title,artist_display,date_display,main_reference_number

   paginate and limit (limit per page):
     ?page=2&limit=100 */
  const api_url = `https://api.artic.edu/api/v1/artworks?page=${pageST}&limit=${limitST}&fields=id,image_id,title`
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
  }, [limitST, pageST]) //end useEffect

  const changeLimitHandler = (limitINT) => {
    console.log('limitINT', limitINT)
    setLimitST(Number(limitINT))
  }

  // const showPageNumHandler = pageINT => {

  // }

  const changePage = (pageUpOrDown) => {
    if (pageST < 2 && pageUpOrDown === "down") { return }
    if (pageUpOrDown === "up") {
      setPageST(p => p + 1)
    } else {
      setPageST(p => p - 1)
    }
  }

  return (
    <MainWrapper>
      <select onChange={e => changeLimitHandler(e.target.value)}>
        <option value="20"  >20</option>
        <option value="50"  >50</option>
        <option value="100" >100</option>
      </select>

      <Grid>
        {dataST.map(e => <ArtCard key={e.id} e={e} />)}

      </Grid>

      <BtnGroup>
        <BackForthBTN onClick={() => setPageST(p => p - 1)} disabled={loadingST || pageST < 2} >previous</BackForthBTN>
        <BTN onClick={() => changePage("down")} disabled={loadingST || pageST < 2} >{pageST - 1} </BTN>
        <CurPageBTN>{pageST} <TriangleIcon /></CurPageBTN>
        <BTN onClick={() => changePage("up")} disabled={loadingST} >{pageST + 1} </BTN>
        <BackForthBTN onClick={() => setPageST(p => p + 1)} disabled={loadingST} >next</BackForthBTN>
      </BtnGroup>

    </MainWrapper>
  )
}



const MainWrapper = styled.main`
  background-color: ${p => p.theme.BG.main2};
  min-height: 100vh;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`

const BtnGroup = styled.div`
  display: flex;
  gap: 20px;
`

const BTN = styled.button`
  font-size: 0.9rem;
  cursor: pointer;
  min-width: 40px;
  min-height: 40px;

  background-color: ${p => p.disabled ? p.theme.BTN.mainDisabled : p.theme.BTN.main};
  color: ${p => p.disabled ? p.theme.BTN.textDisabled : p.theme.BTN.text};
  /* border: 1px solid purple; */
  border: none;
  border-radius: 226px;
`

const BackForthBTN = styled(BTN)`
  min-width: 90px;
`

const CurPageBTN = styled(BTN)`
  background-color: ${p => p.theme.BTN.currentPage};
  position: relative;
  
`


const TriangleIcon = styled(VscTriangleUp)`
  font-size: 0.77rem;
  color: ${p => p.theme.BTN.currentPage};
  position: absolute;
  bottom: -15px;
  left: 12px;
`



export default Home