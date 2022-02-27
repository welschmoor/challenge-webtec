import styled from "styled-components"
import { useState } from 'react'

const SearchForm = () => {
  const [searchTermST, setSearchTermST] = useState('')

  const searchFormHandler = e => {
    e.preventDefault()
    if (searchTermST.trim().length < 1) { return }

  }

  const inputHandler = e => {
    setSearchTermST(e.target.value)
  }
  
  return (
    <Form onSubmit={searchFormHandler}>
      <label htmlFor="searchart">Search Art:</label>
      <input id="searchart" onChange={inputHandler} value={searchTermST} />
    </Form>
  )
}


const Form = styled.form`
  
`

export default SearchForm