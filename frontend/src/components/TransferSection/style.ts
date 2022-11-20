import styled from "styled-components"

import colors from "../../shared/styles/styleVars"

export const TransferSectioContainer = styled.section`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 16rem;
  justify-content: flex-start;
  padding: 10px;
  width: 65%;
`

export const TransferHeader = styled.header`
  align-items: center;
  border-bottom: solid ${colors["black-not-strong"]} 1px;
  display: flex;
  font-size: 2.5vw;
  justify-content: center;
  text-align: center;
  width: 85%;
  margin-bottom: 10px;
`

export const TransferInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 40%;
`
export const TransferLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  font-size: medium;
`

export const Icons = styled.span`
  bottom: 0;
  left: 8px;
  position: absolute;
  background: none;
  border: none;
  cursor: ${(props) => (props.theme ? props.theme : "none")};
`

export const TransferInput = styled.input`
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => (props.color ? colors[props.color] : "red")};
  height: 2rem;
  outline: none;
  padding: 2px 10px 2px 30px;
  position: relative;
  width: 100%;
  font-size: medium;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const TransferButton = styled.button`
  margin-top: 5px;
  align-items: center;
  background-color: ${colors["black-not-strong"]};
  border-radius: 10px;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  height: 2rem;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`
