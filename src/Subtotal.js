import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketSubtotal } from "./reducer";


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* todo */}
              Subtotal ({basket?.length} items): <strong>{ value } </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketSubtotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

        <button className="subtotal__button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
