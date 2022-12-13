import styled from "styled-components"

import colors from "../../../shared/styles/styleVars"

const TransactionContainer = styled.section`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-height: 20rem;
  justify-content: flex-start;
  padding: 10px;
  width: 100%;
`

export default TransactionContainer
