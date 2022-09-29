import { theme } from '../others/Theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../Components/Styles/GlobalStyle'
import IndexLayout from '../Components/IndexLayout'

export function HomeLayout(page) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IndexLayout>{page}</IndexLayout>
    </ThemeProvider>
  )
}
