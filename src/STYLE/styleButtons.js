

import styled from "styled-components"


export const BTN = styled.button`
  font-size: 0.9rem;
  cursor: pointer;
  min-width: 40px;
  min-height: 40px;

  background-color: ${p => p.disabled ? p.theme.BTN.mainDisabled : p.theme.BTN.main};
  color: ${p => p.disabled ? p.theme.BTN.textDisabled : p.theme.BTN.text};
  /* border: 1px solid purple; */
  border: none;

`