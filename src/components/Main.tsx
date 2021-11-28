import React, { useState } from "react";
import FormTextInput from "./FormTextInput/FormTextInput";
import { MathComponent } from "mathjax-react";
import * as S from "./Main.styles";
function Main(props: any) {
  const [finalPrice, setFinalPrice] = useState<number>();
  const [agentCash, setAgentCash] = useState<number>();

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    const net = parseInt(ev.target[0].value || ev.target[0].placeholder);
    const addedValue = parseInt(ev.target[1].value || ev.target[1].placeholder);
    const comission = parseInt(ev.target[2].value || ev.target[2].placeholder);
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
        (comission / 100) * (net + addedValue)) /
      (1 - vat / 100);
    setFinalPrice(Math.ceil(result));
    const agentMoney = (comission / 100) * (net + addedValue);
    setAgentCash(Math.ceil(agentMoney));
  };
  return (
    <div>
      <S.ContainerFormula>
        <form onSubmit={handleSubmit}>
          <FormTextInput name="net" label=" NET"></FormTextInput>
          <FormTextInput
            name="added_value"
            label="Added value"
            defaultValue={200}
          ></FormTextInput>
          <FormTextInput
            name="comission"
            label="Comission %"
            defaultValue={25}
          ></FormTextInput>
          <FormTextInput
            name="VAT"
            label="VAT % "
            defaultValue={25}
          ></FormTextInput>
          <FormTextInput
            name="transfer_costs"
            label="Transfer Costs"
            defaultValue={50}
          ></FormTextInput>
          <FormTextInput
            name="transport_costs"
            label="Transport Costs"
            defaultValue={220}
          ></FormTextInput>
          <input type="submit" />
        </form>

        <h3>Final price: {finalPrice}</h3>
        <h3>Comission amount: {agentCash}</h3>

        <h4> Formula</h4>
        <MathComponent
          tex={String.raw`NET + AV + Comission\% * (NET+AV) \over (1-VAT)\%`}
        />
      </S.ContainerFormula>
    </div>
  );
}

export default Main;
