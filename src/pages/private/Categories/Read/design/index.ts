import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
`

export const CategoryIcon = styled.div`
    width: 50px;
    height: 50px;
`

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`
