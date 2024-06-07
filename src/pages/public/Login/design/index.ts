import styled from 'styled-components'

export const Container = styled.div``

export const Image = styled.img`
  width: 300px;
`
export const GridLogin = styled.div`
  width: 900px;
`

export const Left = styled.div`
  background-color: #e9e9e9;

  @media (prefers-color-scheme: dark) {
    background-color: #101114;
  }

  @media (max-width: 900px) {
    display: none !important;
  }
`

export const Right = styled.div`
  background-color: #dfdfdf;

  @media (prefers-color-scheme: dark) {
    background-color: #0e1012;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`
