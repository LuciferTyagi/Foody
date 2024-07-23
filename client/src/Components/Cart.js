import { useDispatch, useSelector } from "react-redux";

import { clearCart, getTotals } from "../utlis/cartSlice";
import { useEffect } from "react";
import ItemList from "./itemList";
const Cart = () => {
  //Now we have to read the items so we have to subscribe the store
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.cartQuantity,
    0
  );
  return (
    <div className="dark:bg-slate-800 min-h-screen">
      <div className="text-center m-4 p-4 ">
        <h1 className="text-2xl font-bold">Cart</h1>

        <div className="m-auto w-6/12">
          <button
            className="p-2 m-2 bg-black text-green-300 rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && <h1 className="dark:text-white">Cart is empty 🪹Add items to cart</h1>}
          <ItemList
            items={cartItems}
            isInCartPage={true}
            totalCartQuantity={totalCartQuantity}
          ></ItemList>
          <p className="dark:text-white">
            Total Quantity in Cart: {cartItems.length}
          </p>
          <span className="dark:text-white">Subtotal:</span>
          {/* <span className="amount">{carTotalAmount}</span> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
