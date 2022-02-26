import styled from "styled-components"



const ItemsPerPage = ({ changeLimitHandler }) => {
  return (
    <SelectWrapper>
      <div>Pictures per page: </div>
      <Select onChange={e => changeLimitHandler(e.target.value)}>
        <option value="20"  >20</option>
        <option value="50"  >50</option>
        <option value="100" >100</option>
      </Select>
    </SelectWrapper>
  )
}

const SelectWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  justify-content: flex-end;
  margin-right: ${p=>p.theme.MARGIN.mar10};
`

const Select = styled.select`

`

export default ItemsPerPage