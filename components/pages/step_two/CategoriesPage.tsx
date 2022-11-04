import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { Button } from '../../elements/Button'
import { PageContainer } from '../../elements/PageContainer'
import { FormContext } from '../../../contexts/CurrentFormContext'
import { CategorySection } from '../../elements/CategorySection'
import {CategoryButtons} from "../../elements/CategoryButtons";
import {SelectedItems} from "../../elements/SelectedItems";

type CategoriesProps = {
    onNext: () => void,
    onBack: () => void,
}

export const CategoriesPage = ({ onNext, onBack }: CategoriesProps ) => {

    const [numSelected, setNumSelected] = useState<number>(0)
    const [selected, setSelected] = useState<string[]>([])

    useEffect(() => {
        console.log(selected)
    }, [selected])

    const { content, setContent } = useContext(FormContext)

    const handleChange = (
        e: {
            target: any, preventDefault: () => void
        }) => {

        e.preventDefault()
        setContent((prev: object) => ({...prev, [e.target.name]: e.target.value}))
    }

    const items = [
        'Smartphones',
        'Smartwatches',
        'Tablets',
        'GSM accessories',
        'Cases and covers'];

    const names = [
        'Electronics',
        'Fashion',
        'Home and Garden',
        'Supermarket',
        'Beauty',
        'Culture',
        'Sports and Tourism',
        'Automotive',
        'Properties'];

    return (
        <PageContainer>
            <InstructionsText>Select the category your goods belong to (max. 3)</InstructionsText>
            <CategoryContainer>
                <CategoryNames>
                    <CategoryButtons names={names}/>
                </CategoryNames>
                <CategoriesArea>
                    <CategoriesBlock style={{background: 'none'}}>
                        <CategorySection name="Phones and accessories" items={items} numSelected={numSelected} setNumSelected={setNumSelected} setSelected={setSelected}/>
                        <CategorySection name="Phones and accessories" items={items.map(item => item + '1')} numSelected={numSelected} setNumSelected={setNumSelected} setSelected={setSelected}/>
                    </CategoriesBlock>
                    <CategoriesBlock style={{background: 'none'}}>
                        <CategorySection name="Phones and accessories" items={items.map(item => item + '2')} numSelected={numSelected} setNumSelected={setNumSelected} setSelected={setSelected}/>
                        <CategorySection name="Phones and accessories" items={items.map(item => item + '3')} numSelected={numSelected} setNumSelected={setNumSelected} setSelected={setSelected}/>
                    </CategoriesBlock>
                    <CategoriesBlock style={{background: 'none'}}>
                        <CategorySection name="Phones and accessories" items={items.map(item => item + '4')} numSelected={numSelected} setNumSelected={setNumSelected} setSelected={setSelected}/>
                        <CategorySection name="Phones and accessories" items={items.map(item => item + '5')} numSelected={numSelected} setNumSelected={setNumSelected} setSelected={setSelected}/>
                    </CategoriesBlock>
                    <CategoriesBlock style={{background: 'none'}}>
                        <CategorySection name="Phones and accessories" items={items.map(item => item + '6')} numSelected={numSelected} setNumSelected={setNumSelected} setSelected={setSelected}/>
                        <CategorySection name="Phones and accessories" items={items.map(item => item + '7')} numSelected={numSelected} setNumSelected={setNumSelected} setSelected={setSelected}/>
                    </CategoriesBlock>
                </CategoriesArea>
            </CategoryContainer>
            <SelectedContainer>
                <SelectedText>Selected categories:</SelectedText>
                <SelectedItems selected={selected} setSelected={setSelected} setNumSelected={setNumSelected}></SelectedItems>
            </SelectedContainer>
            <Button onClick={() => onBack()}>Back</Button>
            <Button onClick={() => onNext()}>Next →</Button>
        </PageContainer>
    )
}

export const InstructionsText = styled.h4`
    text-align: left;
    margin-left: 2rem;
`

export const CategoryContainer = styled.div`
    display: flex;
`

export const CategoryNames = styled.div`
    width: auto;
`


export const CategoriesArea = styled.div`
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
`
export const CategoriesBlock = styled.div`
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
`

export const SelectedContainer = styled.div`
    display: flex;
    margin-top: 2rem;
`

export const SelectedText = styled.h4`
    text-align: left;
    margin-left: 2rem;
`

