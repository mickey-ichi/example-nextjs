import React from 'react'
import styled from 'styled-components'

type CategorySectionProps = {
    name: string,
    items: string[],
}

export const CategorySection = ({ name, items }: CategorySectionProps ) => {
    return (
        <Category>
            <NameText>{name}</NameText>
            <ItemsContainer>
                {items.map(item => {
                    return (
                        <ItemRow key={Math.random()}>
                            <Input id={item} type='checkbox' />
                            <Label>{item}</Label>
                        </ItemRow>
                    )}
                )}
            </ItemsContainer>
        </Category>
    )
}

export const Category = styled.div`
    margin: auto;
    padding: 10px;
    height: auto;
    font-size: 12px;
`
export const NameText = styled.h3``

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ItemRow = styled.div`
    display: flex;
    line-height: 30px;
`
export const Input = styled.input`
    height: 20px;
    width: 20px;
    margin-right: 1rem;
    // outline: 2.5px solid lightgrey;
    border-radius: 2px;
    accent-color: ${(props) => props.theme.colors.active};
    background-color: white;
    // appearance: none;
    
    &:checked{
    }
`
export const Label = styled.label``