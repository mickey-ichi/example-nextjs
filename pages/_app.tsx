import { useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import type { AppProps } from 'next/app'
import { FormContext } from '../contexts/CurrentFormContext'
import '../styles/globals.css'
import {theme} from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {

    const [descriptionContent, setDescriptionContent] = useState({
    title: '',
    description: '',
    numUnits: 0,
    length: 0,
    width: 0,
    height: 0,
    price: 0,
    })

    const [categoriesContent, setCategoriesContent] = useState([])

    const [photosContent, setPhotosContent] = useState([])

    const [deliveryContent, setDeliveryContent] = useState([ '', [], [] ])

    const [complaintContent, setComplaintContent] = useState({
        complaintTime: '',
        returnTime: '',
        street: '',
        buildingNum: 0,
        premisesNum: 0,
        zip: 0,
        city: '',
        additional: '',
    })

    return (
        <ThemeProvider theme={theme}>
          <FormContext.Provider value={{
              descriptionContent, setDescriptionContent,
              categoriesContent, setCategoriesContent,
              photosContent, setPhotosContent,
              // @ts-ignore
              deliveryContent, setDeliveryContent,
              complaintContent, setComplaintContent,
          }}>
              <Component {...pageProps} />
          </FormContext.Provider>
        </ThemeProvider>
    )
}

export default MyApp
