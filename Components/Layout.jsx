import { theme } from '../others/Theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Styles/GlobalStyle'
import IndexLayout from './IndexLayout'

export function HomeLayout(page) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IndexLayout>{page}</IndexLayout>
    </ThemeProvider>
  )
}
