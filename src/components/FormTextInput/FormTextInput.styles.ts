import styled, { css } from 'styled-components'

export const TextInput = styled.input`
background-color: transparent;
${props => props.defaultValue && css`
    color: gray;
  `}
`
