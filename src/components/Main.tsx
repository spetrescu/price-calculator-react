import  { useState,createContext,useEffect,useRef } from "react";
import FormTextInput from "./FormTextInput/FormTextInput";
import * as S from "./Main.styles";
import useIntersection from '../utilities/hooks/useIntersection'

export const DeviceContext=createContext(null);


function Main(props: any) {
  const ref = useRef();


  const [finalPrice, setFinalPrice] = useState<number>();

   const [agentCash, setAgentCash] = useState<number>();

   const [mobileDevice,setMobileDevice ] = useState<boolean>();

  const inViewport = useIntersection(ref, '0px'); // Trigger as soon as the element becomes visible

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


    if (!inViewport) {
      window.scrollTo(0,document.body.scrollHeight);

      console.log('in viewport:', ref.current);
    }
    // window.scrollTo(0,document.body.scrollHeight);
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

        <S.Price ref={ref}>Final price: {finalPrice || 'N/A'} </S.Price>
        <S.Commission>Commission amount: {agentCash || 'N/A'}</S.Commission>


      </S.ContainerFormula>
      </DeviceContext.Provider>
    </div>
  );
}

export default Main;
