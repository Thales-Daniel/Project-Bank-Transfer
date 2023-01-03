import styled from "styled-components"

import colors from "../../../shared/styles/styleVars"

export const Header = styled.header`
  align-items: center;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors["black-not-strong"]};
  box-shadow: 0 0 2px 0 ${colors.white};
  color: ${colors["black-not-strong"]};
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  padding: 0 1.25rem;
  width: 100%;
`

export const Welcome = styled.p`
  border-left: solid ${colors.gray} 2px;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  font-size: large;
`

export const ContainerImageAndWelcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.875rem;
`

export const LogoNg = styled.img`
  border-radius: 0.625rem;
  width: 3rem;
`

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  background-color: ${colors.white};
  font-size: medium;
  border: none;
  cursor: pointer;
`
