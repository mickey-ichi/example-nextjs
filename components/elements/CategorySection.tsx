import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Checkbox } from './Checkbox'

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

    const handleClick = (index: number) => {
        if (numSelected < 3 || (numSelected === 3 && selected.includes(items[index]))) {
            setChecked((prev) =>
                prev.map((item, arrIndex) =>
                    arrIndex === index ? !prev[index] : prev[index])
            )
            if (!selected.includes(items[index])) {
                setSelected((prev) => [...prev, items[index]])
                setNumSelected(prev => prev + 1)
            }
            else {
                setSelected((prev) => prev.filter(item => item !== items[index]))
                setNumSelected(prev => prev - 1)
            }
        }
    }

    useEffect(() => {
        selected &&
            setChecked(
                items.map((item) => selected.includes(item))
            )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    return (
        <Category>
            <NameText>{name}</NameText>
            <ItemsContainer>
                {items.map((item, index) => {
                    return (
                        <ItemRow
                            key={Math.random()}
                            onClick={() => handleClick(index)}
                        >
                            <Checkbox
                                width='24px'
                                height='24px'
                                isChecked={checked[index]}
                                // onClick={() => handleClick(index)}
                                // disabled={numSelected < 3 ? false : true}
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
    
    @media only screen and (max-width: 400px) {
        flex-direction: column;
    }
`
// export const Checkbox2 = styled(Checkbox)`
//     height: 20px;
//     width: 20px;
//     margin-right: 1rem;
//     // outline: 2.5px solid lightgrey;
//     border-radius: 2px;
//     accent-color: ${(props) => props.theme.colors.active};
//     background-color: white;
//     // appearance: none;
//
//     &:hover {
//         cursor: pointer;
//     }
//
//     &:checked {
//         check-color: white;
//     }
//
//     @media only screen and (max-width: 400px) {
//         margin: auto;
//     }
// `
export const Label = styled.label`
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
`