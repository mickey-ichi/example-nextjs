import { useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import type { AppProps } from 'next/app'
import { FormContext } from '../contexts/CurrentFormContext'
import '../styles/globals.css'
import {theme} from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {

  const [content, setContent] = useState({
    title: 'hello',
    description: 'good morning',
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
