import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  gap: 2.5rem;
  width: 75%;
  height: 90%;
  flex-wrap: wrap;
  flex-direction: column;

  @media (max-width: 600px) {
    gap: 0.625rem;
    width: 90%;
  }
`

export const MainFirstSection = styled.section`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
