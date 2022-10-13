# price-calculator-react
Compute total price and commision amount for products using a simple interface.

## Results 
Currently, the formula used for computing the total price is: 
```
const result =
      (net +
        addedValue +
        transportCosts +
        transferCosts +
        (commission / 100) * (net + addedValue)) /
      (1 - vat / 100);
```
## Usage
Input values in the text boxes and get price and commision estimation.
<br>
<img height="500" alt="entity_parsing_workflow_png" src="https://user-images.githubusercontent.com/60047427/195645595-19c177c2-9f83-457a-939b-aa1590c40279.png">

## Modifications
To modify the formula, simply fork the repository and edit the `src/components/Main.tsx` file. Subsequently, run the React application and see the results in the browser.
