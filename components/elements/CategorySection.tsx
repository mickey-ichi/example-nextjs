import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

type CategorySectionProps = {
    name: string,
    items: string[],
    numSelected: number,
    setNumSelected: React.Dispatch<React.SetStateAction<number>>,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
}

export const CategorySection = ({ name, items, numSelected, setNumSelected, selected, setSelected }: CategorySectionProps ) => {

    const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false])

    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>, index: number) => {
        if (numSelected < 3) {
            setChecked((prev) => {
                const newArray = prev
                newArray[index] = !prev[index]
                return newArray
            })
            setSelected((prev) => [...prev, (e.target as Element).id])
            setNumSelected(prev => prev + 1)
        }
    }

    useEffect(() => {
        console.log('test')

        if(selected) {
            const checkedArray: boolean[] = items.map((item, index) => {
                return selected.includes(item)
            })
            console.log(checkedArray)
            setChecked(checkedArray)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    return (
        <Category>
            <NameText>{name}</NameText>
            <ItemsContainer>
                {items.map((item, index) => {
                    return (
                        <ItemRow key={Math.random()}>
                            <Checkbox
                                id={item}
                                type='checkbox'
                                defaultChecked={checked[index]}
                                onClick={(e) => handleClick(e, index)}
                                disabled={numSelected < 3 ? false : true}
                            />
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
export const Checkbox = styled.input`
    height: 20px;
    width: 20px;
    margin-right: 1rem;
    // outline: 2.5px solid lightgrey;
    border-radius: 2px;
    accent-color: ${(props) => props.theme.colors.active};
    background-color: white;
    // appearance: none;
    
    &:hover {
        cursor: pointer;
    }

    &:checked {
        check-color: white;
    }
`
export const Label = styled.label``