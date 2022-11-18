import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { Button } from '../../elements/Button'
import { PageContainer } from '../../elements/PageContainer'
import { FormContext } from '../../../contexts/CurrentFormContext'
import { CategorySection } from '../../elements/CategorySection'
import { CategoryButtons } from "../../elements/CategoryButtons";
import { SelectedItems } from "../../elements/SelectedItems";
import { items, names } from './placeholderData'
import {ButtonContainer} from "../../elements/ButtonContainer";
import {Form} from "../../elements/Form";
import {ReqInput} from "../../elements/Input";
import {MockData} from "../../../types/types";
import axios from "../../../config/axios";

type CategoriesProps = {
    onNext: () => void,
    onBack: () => void,
}

export const CategoriesPage = ({ onNext, onBack }: CategoriesProps ) => {
    const [mockData, setMockData] = useState<MockData | null>(null)
    const { categoriesContent, setCategoriesContent } = useContext(FormContext)
    const [selected, setSelected] = useState<string []>([])

    const [categoryData, setCategoryData] = useState<any>([])
    const [categoryNames, setCategoryNames] = useState<string[]>([])

    useEffect(() => setSelected(categoriesContent), [categoriesContent])

    useEffect(() => {
        getMockData().then((data: MockData) => setMockData(data))
    },[])

    useEffect(() => {
        if(null !== mockData) {
            const [firstObject]: any = mockData
            const newMockData: any = Array.from(Object.values(firstObject).slice(0,-1))
            setCategoryData(newMockData)
            setCategoryNames(Array.from(Object.keys(firstObject)))
        }
    }, [mockData])

    const getMockData = async () => {
        return axios.get<MockData>('/category').then(res => res.data);
    }

    const changeCategory = (index: number) => {
        if (null !== mockData) {
            // @ts-ignore
            const newStuff: any = Array.from(Object.values(mockData[index]).slice(0,-1))
            setCategoryData(newStuff)
        }
    }

    const getCategoryItems = (index: number) => {
        if (categoryData[index]) {
            const newData = categoryData[index]
            return newData.map((item: string) => item.substring(0,20))
        }
        return items
    }

    const controlArray = [0,1,2,3]


     const [formInProgress, setFormInProgress] = useState<boolean>(true)
     useEffect(() => checkFormProgress(), [selected.length])

     const checkFormProgress = () => {
         setFormInProgress(selected.length <= 0)
     }

     const handleBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
         e.preventDefault()
         setCategoriesContent( [...selected])
         onBack()
     }

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault()
         setCategoriesContent( [...selected])
         onNext()
     }

    return (
        <PageContainer>
            <CategoryForm onSubmit={(e) => handleSubmit(e)}>
                <InstructionsText>Select the category your goods belong to (max 3)</InstructionsText>
                <CategoryContainer>
                    <CategoryNames>
                        <CategoryButtons names={names} changeCategory={(index) => changeCategory(index)}/>
                    </CategoryNames>
                    <CategoriesArea>
                        {controlArray.map((number, index) => (
                            <CategoriesBlock style={{background: 'none'}} key={Math.random()}>
                                <CategorySection
                                    name={categoryNames[index]}
                                    // items={index === 0 ? categoryData.category0 : categoryData.category1}
                                    items={getCategoryItems(index)}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                <CategorySection
                                    name={categoryNames[index + 4]}
                                    items={getCategoryItems(index + 4)}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            </CategoriesBlock>
                        ))}
                    </CategoriesArea>
                </CategoryContainer>
                <Selected>
                    <SelectedText>Selected categories:</SelectedText>
                    <SelectedContainer>
                        <SelectedItems selected={selected} setSelected={setSelected}></SelectedItems>
                    </SelectedContainer>
                </Selected>
                <ButtonContainer>
                    <Button onClick={(e) => handleBack(e)}>Back</Button>
                    <Button disabled={false} type='submit'>Next →</Button>
                </ButtonContainer>
            </CategoryForm>
        </PageContainer>
    )
}

 const InstructionsText = styled.h4`
    text-align: left;
    margin: 10px;
    margin-left: 2rem;
    
    @media only screen and (max-width: 770px) {
        margin: auto;
        margin-bottom: 20px;
        text-align: center;
    }  
`

 const CategoryContainer = styled.div`
    display: flex;
    margin-left: 2rem;
    
    @media only screen and (max-width: 770px) {
        margin: auto;
        flex-direction: column;
    }  
`

 const CategoryNames = styled.div`
    width: auto;
`

 const CategoriesArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;    

    @media only screen and (max-width: 490px) {
       width: 100vw;
       margin-left: -2rem;
       margin-right: auto;
    }    
`

 const CategoriesBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
        
    // @media only screen and (min-width: 1200px) {
    //     margin-left: 5%;
    //     max-width: 100vw;
    // }    
    

`

 const Selected = styled.div`
    display: flex;
    margin-bottom: 5px;
    
    @media only screen and (max-width: 500px) {
       flex-direction: column;
       align-items: center;
    }    
`

 const SelectedContainer = styled.div`
    display: flex;
    min-height: 4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: auto;
    
    @media only screen and (max-width: 500px) {
        margin-left: auto;
        margin-top: 0;
        flex-direction: column;
        align-items: center;
    }
`

 const SelectedText = styled.h4`
    text-align: left;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2.2rem;
    min-width: 170px;
    white-space: no-wrap;
`

const CategoryForm = styled(Form)`
    & ${ReqInput}:invalid {
        border: 3px solid ${props => props.theme.colors.error};
    }
`

