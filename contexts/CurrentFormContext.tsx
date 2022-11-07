import { createContext } from 'react'
import {resolveAny} from "dns";

export type FormContent = {
    descriptionContent: {
        title: string,
        description: string,
        numUnits: number,
        length: number,
        width: number,
        height: number,
        price: number,
    },
    setDescriptionContent: (t: any) => void,
    categoriesContent: {
        category1: string,
        category2: string,
        category3: string,
    },
    setCategoriesContent: (t: any) => void,
}

export const FormContext = createContext<FormContent>({
    descriptionContent: {
        title: '',
        description: '',
        numUnits: 0,
        length: 0,
        width: 0,
        height: 0,
        price: 0,
    },
    setDescriptionContent: () => {},
    categoriesContent: {
        category1: '',
        category2: '',
        category3: '',
    },
    setCategoriesContent:  () => {},
})



// export type FormContent = {
//     content: {
//     title: string,
//     setTitle: (t: string) => void,
//     description: string,
//     setDescription: (t: string) => void,
//     numUnits: number,
//     setNumUnits: (t: number) => void,
//     length: number,
//     setLength: (t: number) => void,
//     width: number,
//     setWidth: (t: number) => void,
//     height: number,
//     setHeight: (t: number) => void,
//     price: number,
//     setPrice: (t: number) => void,
//     },
//     setContent: (t: Object) => void,
// }

// export const FormContext = createContext<FormContent>({
//     content: 
//     {title: '',
//     setTitle: () => {},
//     description: '',
//     setDescription: () => {},
//     numUnits: 0,
//     setNumUnits: () => {},
//     length: 0,
//     setLength: () => {},
//     width: 0,
//     setWidth: () => {},
//     height: 0,
//     setHeight: () => {},
//     price: 0,
//     setPrice: () => {},},
//     setContent: () => {},
// })





// import * as React from 'react'

// export type FormType = {
//     title: string
//     description: string
// }

// export type FormContextType = {
//     currentForm?: FormType
//     setCurrentForm: (form: FormType) => void
// }

// export const CurrentFormContext = React.createContext<FormContextType | null>(null)

// type ProviderProps = {
//     children: React.ReactNode
// }

// export const CurrentFormProvider: React.FC<ProviderProps> = ({ children }) => {
//     const [currentForm, setCurrentForm] = React.useState<FormType>()

//     const stateValues = {
//         currentForm,
//         setCurrentForm
//     }

//     return (
//         <CurrentFormContext.Provider value={stateValues}>
//             {children}
//         </CurrentFormContext.Provider>
//     )
// }
