
import axios from 'axios'
import React, { useState, useEffect } from 'react'

//styles
import styled from 'styled-components'

import ArtCard from "../components/ArtCard"
import Pagination from '../components/Pagination'
import ItemsPerPage from '../components/ItemsPerPage'


const Home = () => {
  const [dataST, setDataST] = useState([])
  const [pageST, setPageST] = useState(1)
  const [limitST, setLimitST] = useState(20) // show 20 per page
  const [loadingST, setLoadingST] = useState(true)

  const [inputValue, setInputValue] = useState("")
  const [searchTerm, setSearchTerm] = useState("")



  /* limit fields:
     ... ?fields=id,title,artist_display,date_display,main_reference_number
   paginate and limit (limit per page):
     ?page=2&limit=100 */

  const api_url = searchTerm.trim().length < 1
    ? `https://api.artic.edu/api/v1/artworks?page=${pageST}&limit=${limitST}&fields=id,image_id,title`
    : `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}?page=${pageST}&limit=${limitST}&fields=id,image_id,title`

  useEffect(() => {
    let unsub = false
    const fetchData = async () => {
      setLoadingST(true)
      try {
        const response = await axios.get(api_url)
        console.log('response', response)
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
  }, [limitST, pageST, searchTerm, api_url]) //end useEffect

  const changeLimitHandler = (limitINT) => {
    console.log('limitINT', limitINT)
    setLimitST(Number(limitINT))
  }

  const changePage = (pageUpOrDown) => {
    if (pageST < 2 && pageUpOrDown === "down") { return }
    if (pageUpOrDown === "up") {
      setPageST(p => p + 1)
    } else {
      setPageST(p => p - 1)
    }
  }

  const searchHandler = e => {
    e.preventDefault()
    setSearchTerm(inputValue.trim())
  }

  const showAllHandler = () => {
    setSearchTerm("")
    setInputValue("")
    setPageST(1)
  }

  return (
    <MainWrapper>
      <FormDiv>
        <Form onSubmit={searchHandler}>
          <Input name="searchInput" id="searchInput" value={inputValue} onChange={e => setInputValue(e.target.value)} />
          <SubmitBTN type="submit" >Search</SubmitBTN>
        </Form>
        <ShowAllBTN type="button" onClick={showAllHandler}>Show All</ShowAllBTN>
      </FormDiv>

      <ItemsPerPage changeLimitHandler={changeLimitHandler} />

      <Pagination changePage={changePage} setPageST={setPageST} loadingST={loadingST} pageST={pageST} />

      <Grid>
        {dataST.map(e => <ArtCard key={e.id} e={e} />)}
      </Grid>

      <Pagination changePage={changePage} setPageST={setPageST} loadingST={loadingST} pageST={pageST} />

    </MainWrapper>
  )
}



const MainWrapper = styled.main`
  background-color: ${p => p.theme.BG.main2};
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px ${p => p.theme.MARGIN.mar10};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  padding-top: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`


///////////////////////////////
// FORM
const FormDiv = styled.div`
  display: flex;
  gap: 10px;
  height: 40px;
  margin: 0 ${p => p.theme.MARGIN.mar10};
  margin-bottom: 40px;
  /* width: 100%; */

  @media (max-width: 550px) {
    display: block;
  }
`

const SubmitBTN = styled.button`
  height: 100%;
  padding: 0;
  margin: 0;
  height: 100%;
  min-width: 100px;


  cursor: pointer;

  background-color: ${p => p.disabled ? p.theme.BTN.mainDisabled : p.theme.BTN.main};
  color: ${p => p.disabled ? p.theme.BTN.textDisabled : p.theme.BTN.text};
  /* border: 1px solid purple; */
  border: none;

`

const Form = styled.form`
  height: 100%;
  display: flex;
`

const Input = styled.input`
  height: 100%;
  padding-left: 12px;
  min-width: 260px;

  @media (max-width: 550px) {
    min-width: 0;
  }
`

const ShowAllBTN = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${p=>p.theme.TEXT.title};

  @media (max-width: 550px) {
    display: block;
  }
`

export default Home