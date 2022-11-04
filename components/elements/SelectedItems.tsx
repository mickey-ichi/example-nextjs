import React, { useState } from 'react'
import styled from 'styled-components'

type SelectedItemsProps = {
    // names: string[],
}

export const SelectedItems = ({  }: SelectedItemsProps ) => {

    return (
        <Container>
            <Item>number 1</Item>
            <Item>number 1</Item>
            <Item>number 1</Item>
        </Container>
    )
}

export const Container = styled.div`
    margin: auto;
    margin-left: 2rem;
    display: flex;
`

export const Item = styled.div`
    background: ${(props) => props.theme.colors.selected};
    padding: 10px;
    padding-right: 30px;
    padding-left: 30px;
    margin: 1rem;
    border-radius: 20px;
`



