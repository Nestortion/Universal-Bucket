import { ThemeProvider, withTheme } from 'styled-components'
import UtilsLayout from '../Components/UtilsLayout'
import { GlobalStyle } from '../Components/Styles/GlobalStyle'
import { theme } from '../others/Theme'

function MyApp({ Component, pageProps }) {
  if (!Component.getLayout) {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <UtilsLayout>
            <Component {...pageProps} />
          </UtilsLayout>
        </ThemeProvider>
      </>
    )
  } else {
    return Component.getLayout(<Component {...pageProps} />)
  }
}

export default MyApp
