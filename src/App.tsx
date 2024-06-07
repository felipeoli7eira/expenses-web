import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/routes'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

export default function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Normalize />
        <AppRoutes />
        <GlobalStyle />
      </BrowserRouter>
    </Theme>
  )
}
