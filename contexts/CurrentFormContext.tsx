import { createContext } from 'react'

type Photos = {
    url: string,
    name: string,
    size: number,
}

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

    categoriesContent: string [],
    setCategoriesContent: (t: any) => void,

    photosContent: Photos [],
    setPhotosContent: (t: any) => void,

    deliveryContent: [string, string [], number [] ],
    setDeliveryContent: (t: any) => void,

    complaintContent: {
        complaintTime: string,
        returnTime: string,
        street: string,
        buildingNum: number,
        premisesNum: number,
        zip: number,
        city: string,
        additional: string,
    },
    setComplaintContent: (t: any) => void,
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

    categoriesContent: [],
    setCategoriesContent:  () => {},

    photosContent: [],
    setPhotosContent: () => {},

    deliveryContent: ['', [''], [0]],
    setDeliveryContent:  () => {},

    complaintContent: {
        complaintTime: '',
        returnTime: '',
        street: '',
        buildingNum: 0,
        premisesNum: 0,
        zip: 0,
        city: '',
        additional: '',
    },
    setComplaintContent: () => {},
})
