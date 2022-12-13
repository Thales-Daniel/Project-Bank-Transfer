import styled from "styled-components"

import colors from "../../../shared/styles/styleVars"

export const BoxContainer = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: space-evenly;
  width: 25rem;
`

export const BoxContainerTitle = styled.h1``

export const LoginButton = styled.button`
  background-color: ${colors["black-not-strong"]};
  border-radius: 10px;
  border: none;
  font-size: medium;
  color: ${colors.white};
  cursor: pointer;
  height: 2.2rem;
  width: 15rem;
`
