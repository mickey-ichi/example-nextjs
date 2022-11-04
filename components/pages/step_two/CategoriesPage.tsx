import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button } from '../../elements/Button'
import { PageContainer } from '../../elements/PageContainer'
import { Form } from '../../elements/Form'
import { FormContext } from '../../../contexts/CurrentFormContext'
import { CategorySection } from '../../elements/CategorySection'

type CategoriesProps = {
    onNext: () => void,
    onBack: () => void,
}

export const CategoriesPage = ({ onNext, onBack }: CategoriesProps ) => {

    const { content, setContent } = useContext(FormContext)

    const handleChange = (
        e: {
            target: any, preventDefault: () => void
        }) => {

        e.preventDefault()
        setContent((prev: object) => ({...prev, [e.target.name]: e.target.value}))
    }

    const arr = [
        'Smartphones',
        'Smartwatches',
        'Tablets',
        'GSM accessories',
        'Cases and covers'];

    return (
        <PageContainer>
            <CategoriesArea>
                <CategoriesBlock style={{background: 'none'}}>
                    <CategorySection name="Phones and accessories" items={arr} />
                    <CategorySection name="Phones and accessories" items={arr} />
                </CategoriesBlock>
                <CategoriesBlock style={{background: 'none'}}>
                    <CategorySection name="Phones and accessories" items={arr} />
                    <CategorySection name="Phones and accessories" items={arr} />
                </CategoriesBlock>
                <CategoriesBlock style={{background: 'none'}}>
                    <CategorySection name="Phones and accessories" items={arr} />
                    <CategorySection name="Phones and accessories" items={arr} />
                </CategoriesBlock>
                <CategoriesBlock style={{background: 'none'}}>
                    <CategorySection name="Phones and accessories" items={arr} />
                    <CategorySection name="Phones and accessories" items={arr} />
                </CategoriesBlock>
            </CategoriesArea>
            <Button onClick={() => onBack()}>Back</Button>
            <Button onClick={() => onNext()}>Next →</Button>
        </PageContainer>
    )
}

export const CategoriesArea = styled.div`
    margin-left: 20%;
    height: 40rem;
    display: flex;
`
export const CategoriesBlock = styled.div`
    height: 20rem;
    display: flex;
    flex-wrap: wrap;
`

