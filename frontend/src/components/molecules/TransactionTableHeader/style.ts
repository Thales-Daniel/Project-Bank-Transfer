import styled from "styled-components"

import colors from "../../../shared/styles/styleVars"

export const TypeHeaderP = styled.p`
  font-size: 1.25rem;
  border-right: 1px solid ${colors["black-not-strong"]};
`

export const TableHeader = styled.header`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: ${colors.whitesmoke};
  margin-bottom: 0.625rem;

  ${TypeHeaderP}:nth-child(4) {
    border-right: none;
  }
`
