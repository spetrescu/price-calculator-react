import React from 'react'
import * as S from './FormTextInput.styles'
function FormTextInput(props:any ) {
    return(
    <div>
        <p>{props.label}</p>
       <S.TextInput  placeholder={props.defaultValue}></S.TextInput>
    </div>
    )
  }
  
  export default FormTextInput;