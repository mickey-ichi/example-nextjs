import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { Button } from '../../elements/Button'
import { PageContainer } from '../../elements/PageContainer'
import { FormContext } from '../../../contexts/CurrentFormContext'
import { CategorySection } from '../../elements/CategorySection'
import { CategoryButtons } from "../../elements/CategoryButtons";
import { SelectedItems } from "../../elements/SelectedItems";
import { items, names } from './placeholderData'
import axios from "axios";

type CategoriesProps = {
    onNext: () => void,
    onBack: () => void,
}

export const CategoriesPage = ({ onNext, onBack }: CategoriesProps ) => {

    useEffect(() => {
        axios({
            url: "https://635a2a5538725a1746bf2903.mockapi.io/category",
            method: "GET",
        })
            .then((res) => {
                setMockData(res.data)
                setCategoryData(Object.values(res.data[0]))
                setCategoryNames(Array.from(Object.keys(res.data[0])))
            })
            .catch((err) => {
                console.log(err)
            });
    },[])

    const [numSelected, setNumSelected] = useState<number>(0)
    const [selected, setSelected] = useState<string[]>([])

    const [mockData, setMockData] = useState([])
    const [categoryData, setCategoryData] = useState([])
    const [categoryNames, setCategoryNames] = useState<string[]>([])

    const changeCategory = (index: number) => {
        if (mockData[index]) {
            setCategoryData(Object.values(mockData[index]))
        }
    }

    const getCategoryItems = (index: number) => {
        if (categoryData[index]) {
            const newData: string[] = Array.from(categoryData[index])
            return newData.map(item => item.substring(0,20))
        }
        return items
    }

    const controlArray = [0,1,2,3]

    const { setCategoriesContent } = useContext(FormContext)

    const handleSubmit = () => {
        setCategoriesContent({category1: selected[0] || '', category2: selected[1] || '', category3: selected[2] || ''})
        onNext()
    }

    return (
        <PageContainer>
            <CategoryPageContainer>
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
                                    numSelected={numSelected}
                                    setNumSelected={setNumSelected}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                <CategorySection
                                    name={categoryNames[index + 4]}
                                    items={getCategoryItems(index + 4)}
                                    numSelected={numSelected}
                                    setNumSelected={setNumSelected}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            </CategoriesBlock>
                        ))}
                    </CategoriesArea>
                </CategoryContainer>
                <SelectedContainer>
                    <SelectedText>Selected categories:</SelectedText>
                    <SelectedItems selected={selected} setSelected={setSelected} setNumSelected={setNumSelected}></SelectedItems>
                </SelectedContainer>
                <Button onClick={() => onBack()}>Back</Button>
                <Button onClick={() => handleSubmit()}>Next →</Button>

            </CategoryPageContainer>
        </PageContainer>
    )
}

export const CategoryPageContainer = styled.div`
    @media only screen and (min-width: 1400px) {
        margin: auto;
        padding-left: 7vw;
        padding-right: 7vw;
    }
    @media only screen and (min-width: 1700px) {
        padding-left: 16rem;
        padding-right: 16rem;
    }   
`

export const InstructionsText = styled.h4`
    text-align: left;
    margin-left: 2rem;
`

export const CategoryContainer = styled.div`
    display: flex;
    
    @media only screen and (min-width: 1400px) {
        margin-left: 4%;
    }
`

export const CategoryNames = styled.div`
    width: auto;
`

export const CategoriesArea = styled.div`
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    
    @media only screen and (min-width: 1000px) {
        margin: auto;
        max-width: 60rem;
    }
    @media only screen and (max-width: 600px) {
        margin-left: -5rem;
    }
    @media only screen and (max-width: 400px) {
        margin-left: -6rem;
    }
`

export const CategoriesBlock = styled.div`
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    
    @media only screen and (min-width: 1400px) {
        margin-left: 5%;
        margin-right: 0;
        max-width: 100vw;
    }    
`

export const SelectedContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    min-height: 5rem;
    height: auto;
    
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        margin: auto;
        align-items: center;
    }
`

export const SelectedText = styled.h4`
    text-align: left;
    margin-left: 2rem;
        
    @media only screen and (max-width: 600px) {
        margin-left: auto;
        margin-right: auto;
    }
`

