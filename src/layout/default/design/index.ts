import styled from 'styled-components'
import { NavigationProps } from '../../../interfaces/DefaultTemplateProps'

export const DefaultLayout = styled.main`
  height: 100dvh;
`

export const Aside = styled.aside<NavigationProps>`
  transition: all 0.2s;
  left: ${({ navigationIsOpen }) => (navigationIsOpen ? '0' : '-80px')};
  width: 80px;

  a,
  button {
    transition: all 0.2s;
    color: ${({ theme }) => theme.colors.purple};

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const LogOutButton = styled.button`
  background: none;
  outline: none;
  border: none;
`

export const Content = styled.main<NavigationProps>`
  transition: all 0.2s;
  ${(props) => props.navigationIsOpen && `
    left: 80px;
    width: calc(100% - 80px);
  `}

  ${(props) => !props.navigationIsOpen && `
    left: 0;
    width: 100%;
  `}
`

export const ButtonChangeMenuState = styled.button`
    background: none;
    border: none;
    outline: 0;
`
