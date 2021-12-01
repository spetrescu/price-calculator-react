import  { useState,createContext,useEffect } from "react";
import FormTextInput from "./FormTextInput/FormTextInput";
import { MathComponent } from "mathjax-react";
import * as S from "./Main.styles";
export const DeviceContext=createContext(null);


function Main(props: any) {
   const [finalPrice, setFinalPrice] = useState<number>();

   const [agentCash, setAgentCash] = useState<number>();

   const [mobileDevice,setMobileDevice ] = useState<boolean>();


useEffect(()=>{if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  setMobileDevice(true);
}else{
  setMobileDevice(false);
}},[])

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    const net = parseInt(ev.target[0].value || ev.target[0].placeholder);
    const addedValue = parseInt(ev.target[1].value || ev.target[1].placeholder);
    const commission = parseInt(ev.target[2].value || ev.target[2].placeholder);
    const vat = parseInt(ev.target[3].value || ev.target[3].placeholder);
    const transferCosts = parseInt(
      ev.target[4].value || ev.target[4].placeholder
    );
    const transportCosts = parseInt(
      ev.target[5].value || ev.target[5].placeholder
    );

    const result =
      (net +
        addedValue +
        transportCosts +
        transferCosts +
        (commission / 100) * (net + addedValue)) /
      (1 - vat / 100);
    setFinalPrice(Math.ceil(result));
    const agentMoney = (commission / 100) * (net + addedValue);
    setAgentCash(Math.ceil(agentMoney));
  };
  return (
    <div>
      <DeviceContext.Provider value={{mobileDevice}}>
      <S.ContainerFormula>
        <form onSubmit={handleSubmit}>
          <FormTextInput name="net" label=" NET"/>
          <FormTextInput
            name="added_value"
            label="Added value"
            defaultValue={200}
          />
          <FormTextInput
            name="commission"
            label="Commission %"
            defaultValue={25}
          />
          <FormTextInput
            name="VAT"
            label="VAT % "
            defaultValue={25}
          />
          <FormTextInput
            name="transfer_costs"
            label="Transfer Costs"
            defaultValue={50}
          />
          <FormTextInput
            name="transport_costs"
            label="Transport Costs"
            defaultValue={220}
          />
          <S.Submit type="submit" value="SUBMIT" />
        </form>

        <S.Price>Final price: {finalPrice || 'N/A'} </S.Price>
        <S.Commission>Commission amount: {agentCash || 'N/A'}</S.Commission>

        <h4> Formula</h4>
        <MathComponent
            font-color = "white"
            settings={{"font-color":"#ffffff"}}
            width={'unset'}
            height={'unset'}
          tex={String.raw`NET + AV + Commission\% * (NET+AV) + TFC + TRC \over (1-VAT)\%`}
        />
      </S.ContainerFormula>
      </DeviceContext.Provider>
    </div>
  );
}

export default Main;
