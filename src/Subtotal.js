import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const computeTotal = () => {
    console.log(basket);
    return basket?.reduce((total, item)=> total + item.price, 0);
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* todo */}
              Subtotal ({basket?.length} items): <strong>{ computeTotal() } </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

        <button className="subtotal__button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
