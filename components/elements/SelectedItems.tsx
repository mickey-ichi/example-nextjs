import React from 'react'
import styled from 'styled-components'

type SelectedItemsProps = {
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
}

export const SelectedItems = ({ selected, setSelected }: SelectedItemsProps ) => {
    const handleClick = (itemToRemove: string) => {
        setSelected(prev => {
            const indexToRemove = prev.indexOf(itemToRemove)
            const newArray = prev.filter((data, index) => index !== indexToRemove)
            return newArray
        })
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
    flex-wrap: wrap;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 600px) {
        margin: auto;
    }
`

export const Item = styled.div`
    background: ${(props) => props.theme.colors.selected};
    padding: 7px;
    padding-right: 30px;
    padding-left: 30px;
    margin: 1rem;
    border-radius: 20px;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 14px;
    font-style: normal;

    * {
        margin: 0;
        padding: 0;
    }
    
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`
