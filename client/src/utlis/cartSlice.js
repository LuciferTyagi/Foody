import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [],
    cartTotalQuantity:0,
    cartTotalAmount:0,
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1;
        toast.info(
          `Increased the quantity of ${action.payload.card.info.name}`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const tempItem = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempItem);
        toast.success(`${action.payload.card.info.name} added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("items", JSON.stringify(state.items));
    },

    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (itemIndex !== -1) {
        // Remove the item from the array
        state.items.splice(itemIndex, 1);
        localStorage.setItem("items", JSON.stringify(state.items));
        toast.error(`${action.payload.card.info.name} remove from cart`, {
          position: "bottom-left",
        });
      }
    },
    decreaseItems: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity -= 1;
        toast.info(`${action.payload.card.info.name} decreased the quantity from cart`, {
          position: "bottom-left",
        });
      }
      else if(state.items[itemIndex].cartQuantity === 1){
        const itemIndex = state.items.findIndex(
          (item) => item.card.info.id === action.payload.card.info.id
        );
        if (itemIndex !== -1) {
          // Remove the item from the array
          state.items.splice(itemIndex, 1);
          toast.error(`${action.payload.card.info.name} remove from cart`, {
            position: "bottom-left", 
          });
        }
      }
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items.length = 0;
      toast.error("Cart is cleared",{
        position:"bottom-left",
      })
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    getTotals:(state,action) =>{
      let {total ,quantity} = state.items.reduce(
        (cartTotal , item)=>{
        const {price } = item.card.info.price / 100;
        const {cartQuantity} = item;
        const itemTotal = price* cartQuantity;

        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;
        return cartTotal;
      } ,{
        total:0,
        quantity:0,
      }
    );
    state.cartTotalQuantity = quantity;
    state.cartTotalAmount = total;
    },
  },
});

export const { addItem, removeItem, clearCart,decreaseItems ,getTotals } = cartSlice.actions;

export default cartSlice.reducer;
