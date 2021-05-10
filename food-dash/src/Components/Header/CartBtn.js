import styles from "./CartBtn.module.css";
import CartList from "../Cart/CartList";
import { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";

const CartBtn = () => {
  const [cartToggle, setCartToggle] = useState(false);
  const cartContext = useContext(CartContext);
  const cartPopulation = cartContext.foodData.cartItems.reduce(
    (acc, ele) => (acc += ele.amount),
    0
  );

  function toggleCartDisplay() {
    setCartToggle((previousState) => !previousState);
  }

  return (
    <>
      <Button btnHandler={toggleCartDisplay} size="large" color="dark">
        <div className={styles.cart__wrapper}>
          <svg
            className={styles.icon}
            aria-hidden="true"
            focusable="false"
            role="presentation"
            viewBox="0 0 576 512"
          >
            <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
          </svg>
          <span>Your Cart</span>
          <div className={styles["cart__count"]}>{cartPopulation}</div>
        </div>
      </Button>
      {cartToggle && <CartList toggleCartDisplay={toggleCartDisplay} />}
    </>
  );
};

export default CartBtn;
