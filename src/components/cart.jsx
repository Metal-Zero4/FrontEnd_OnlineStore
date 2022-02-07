import { useContext } from "react";
import storeContext from"../context/storeContext";
import "./cart.css";
import CartItem from "./cartItem";
import DataService from "../services/dataService";

const Cart = (props) => {
    const cart = useContext(storeContext).cart;

    const getTotal = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            let prodTotal = prod.quantity * prod.price;
            total += prodTotal;
          }
      

        return total.toFixed(2);
    };

    const submitOrder = () => {
      console.log("You Clicked Submit order!");
      let order = {
        user: 1231231,
        products: cart,
      };
      let service = new DataService();
      service.submitOrder(order);
    };
  

    return (
        <div className="cart-page">
      <h1>Ready to order ?</h1>
      <h4>You have {cart.length} products on the cart</h4>

      <div className="cart-content">
        <section className="list">
          {cart.map((prod) => (
            <CartItem key={prod._id} info={prod}></CartItem>
          ))}
        </section>

        <section className="total-content">
          <div>
            <h5>Total:</h5>
            <hr />
            <h6>${getTotal()}</h6>
            <hr />
            <button onClick={submitOrder} className="btn btn-dark">Proceed to payment</button>
          </div>
        </section>
      </div>
    </div>

      );
    };
    

export default Cart;