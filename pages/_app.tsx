import { useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import type { AppProps } from 'next/app'
import { FormContext } from '../context/CurrentFormContext'

import '../styles/globals.css'

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }: AppProps) {

  const [content, setContent] = useState({
    title: 'hello',
    description: '',
    numUnits: 0,
    length: 0,
    width: 0,
    height: 0,
    price: 0,
  })

  return (
    <FormContext.Provider value={{content, setContent}}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </FormContext.Provider>
  )
}

export default MyApp
