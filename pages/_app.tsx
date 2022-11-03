import { useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import type { AppProps } from 'next/app'
import { FormContext } from '../contexts/CurrentFormContext'

import '../styles/globals.css'

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
    light: '#fff',
    text: '#181818',
    inputBG: '#F8F8F8',
    disabled: '#EFEFEF',
    active: '#FF782D',
  },
  font: {
    family: 'sans-serif',
    weight: '400',
    bold: '600',
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
    <ThemeProvider theme={theme}>
      <FormContext.Provider value={{content, setContent}}>
          <Component {...pageProps} />
      </FormContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
