import * as React from 'react'

export type FormType = {
    title: string
    description: string
}

export type FormContextType = {
    currentForm?: FormType
    setCurrentForm: (form: FormType) => void
}

export const CurrentFormContext = React.createContext<FormContextType | null>(null)

type ProviderProps = {
    children: React.ReactNode
}

export const CurrentFormProvider: React.FC<ProviderProps> = ({ children }) => {
    const [currentForm, setCurrentForm] = React.useState<FormType>()

    const stateValues = {
        currentForm,
        setCurrentForm
    }

    return (
        <CurrentFormContext.Provider value={stateValues}>
            {children}
        </CurrentFormContext.Provider>
    )
}
