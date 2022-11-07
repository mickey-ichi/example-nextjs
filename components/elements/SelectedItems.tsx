import React from 'react'
import styled from 'styled-components'

type SelectedItemsProps = {
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
    setNumSelected: React.Dispatch<React.SetStateAction<number>>,
}

export const SelectedItems = ({ selected, setSelected, setNumSelected }: SelectedItemsProps ) => {
    const handleClick = (itemToRemove: string) => {
        setSelected(prev => {
            const indexToRemove = prev.indexOf(itemToRemove)
            const newArray = prev.filter((data, index) => index !== indexToRemove)
            return newArray
        })
        setNumSelected(prev => prev - 1)
    }

    return (
        <Container>
            {selected.map((item, index) => (
                <Item
                    key={Math.random()}
                    onClick={() => handleClick(selected[index])}
                >
                    <p>{selected[index]}</p>
                    <span>&nbsp; &nbsp; &#10005;</span>
                </Item>
            ))}
        </Container>
    )
}

export const Container = styled.div`
    margin: auto;
    margin-left: 2rem;
    display: flex;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 600px) {
        margin: auto;
    }
`

export const Item = styled.div`
    background: ${(props) => props.theme.colors.selected};
    padding: 10px;
    padding-right: 30px;
    padding-left: 30px;
    margin: 1rem;
    border-radius: 20px;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;

    * {
        margin: 0;
        padding: 0;
    }
    
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`
