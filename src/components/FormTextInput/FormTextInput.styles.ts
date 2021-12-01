import styled, { css } from 'styled-components'

interface InputProps {
  readonly mobileDevice: boolean;
};

export const TextInput = styled.input<InputProps>`
  ${props => props.defaultValue && css`
    color: gray;
  `}
  ${props => props.mobileDevice && css`
    width:100%;
    margin-bottom: 1.1rem;

  `}
  ${props => !props.mobileDevice && css`
    min-width:20rem;
    width:100%;
    max-width:35%;
    margin-bottom: 1.4rem;

  `}
  
  
  
  border-radius:15px;
  border-style:none;
  height:auto;
  text-align:center;
  padding:0.1rem 0 0.1rem 0;
  font-size:1.2rem;
  display:block;
  
`
export const Label = styled.label`
  padding-bottom: 0.5rem;
font-size:1.2rem;
  display:block;
  color:white;
  font-weight: bold;
  
`