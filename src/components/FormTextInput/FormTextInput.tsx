import * as S from './FormTextInput.styles'
import {useContext} from "react";
import {DeviceContext} from "../Main";
function FormTextInput(props:any ) {
    const {mobileDevice} = useContext(DeviceContext);
    return(
    <>
        <S.Label>{props.label}</S.Label>
        <S.TextInput mobileDevice={mobileDevice} placeholder={props.defaultValue}/>
    </>
    )
  }
  
  export default FormTextInput;