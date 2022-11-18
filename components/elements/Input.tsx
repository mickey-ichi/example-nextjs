import styled from "styled-components";

export const Input = styled.input`
    background: #F8F8F8;
    border-radius: 8px;
    height: 3rem;
    font-weight: 400;
    font-size: 16px;
    color: #181818;
    text-indent: 10px;
    border: none;
    
   &:focus {
       outline: none;
    }
`

// export const ReqInput = styled(Input).attrs({required: true})``
export const ReqInput = styled(Input)``
