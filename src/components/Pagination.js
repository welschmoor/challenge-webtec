
import styled from 'styled-components'
import { VscTriangleUp } from "react-icons/vsc"

const Pagination = ({ setPageST, changePage, loadingST, pageST }) => {
  return (
    <BtnGroup>
      <BackForthBTN onClick={() => setPageST(p => p - 1)} disabled={loadingST || pageST < 2} >previous</BackForthBTN>
      <CenterGroup>
        <BTN onClick={() => changePage("down")} disabled={loadingST || pageST < 2} >{pageST - 1} </BTN>
        <CurPageBTN>{pageST} <TriangleIcon /></CurPageBTN>
        <BTN onClick={() => changePage("up")} disabled={loadingST} >{pageST + 1} </BTN>
      </CenterGroup>
      <BackForthBTN onClick={() => setPageST(p => p + 1)} disabled={loadingST} >next</BackForthBTN>
    </BtnGroup>
  )
}

const BtnGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0;
`

const CenterGroup = styled.div`
  display: flex;
  gap: 20px
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

export default Pagination