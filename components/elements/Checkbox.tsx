import React from 'react'
import styled from 'styled-components'

type CheckboxProps = {
    isChecked: boolean,
}

export const Checkbox = ({ isChecked }: CheckboxProps) => (
    <CheckboxContainer>
        <HiddenCheckbox defaultChecked={isChecked} />
        <StyledCheckbox
            style={{
                background: isChecked ? '#FF782D' : 'white',
                border: isChecked ? '2px solid white' : '2px solid #D7D7D7',
            }}
        >
            {isChecked && <Icon
                viewBox="0 0 24 24"
            >
                <polyline points="20 6 9 17 4 12" />
            </Icon>}
        </StyledCheckbox>
    </CheckboxContainer>
)

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-top: 3px;
  margin-right: 1rem;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  height: 2rem;
  width: 2rem;
  border: 2px solid #D7D7D7;
  border-radius: 4px;
  
  &:hover {
    cursor: pointer;
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
`