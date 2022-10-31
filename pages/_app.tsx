import { ThemeProvider, DefaultTheme } from 'styled-components'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>

}

export default MyApp
