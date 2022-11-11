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
import {ButtonContainer} from "../../elements/ButtonContainer";

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
            <Selected>
                <SelectedText>Selected categories:</SelectedText>
                <SelectedContainer>
                    <SelectedItems selected={selected} setSelected={setSelected} setNumSelected={setNumSelected}></SelectedItems>
                </SelectedContainer>
            </Selected>
            <ButtonContainer>
                <Button onClick={() => onBack()}>Back</Button>
                <Button onClick={() => handleSubmit()}>Next →</Button>
            </ButtonContainer>
        </PageContainer>
    )
}

export const InstructionsText = styled.h4`
    text-align: left;
    margin: 10px;
    margin-left: 2rem;
`

export const CategoryContainer = styled.div`
    display: flex;
    margin-left: 2rem;
`

export const CategoryNames = styled.div`
    width: auto;
`

export const CategoriesArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
`

export const CategoriesBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
        
    @media only screen and (min-width: 1200px) {
        margin-left: 5%;
        max-width: 100vw;
    }    
`

export const Selected = styled.div`
    display: flex;
    margin-bottom: 5px;
`

export const SelectedContainer = styled.div`
    display: flex;
    margin-top: 10px;
    margin-left: -2rem;
    
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`

export const SelectedText = styled.h4`
    text-align: left;
    margin-left: 2rem;
    margin-top: 2rem;
    min-width: 170px;
    white-space: no-wrap;
`


