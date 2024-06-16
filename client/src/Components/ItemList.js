import { useDispatch } from "react-redux";
import { CDN_URL } from "../utlis/constant";
import { addItem, decreaseItems, removeItem } from "../utlis/cartSlice";

const ItemList = ({ items, isInCartPage, totalCartQuantity }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  const handleDecreaseCart = (item) => {
    dispatch(decreaseItems(item));
  };
  

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-black border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            
              {!isInCartPage && (<button
                className="p-2 px-4 absolute right-[34%] rounded-lg bg-black text-green-300 shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>)}
              
              <div >
                  
              {isInCartPage && (
                <button
                  className="p-2 mx-16  absolute right-[16%] rounded-lg bg-black text-green-300 shadow-lg"
                  onClick={() => handleRemoveItem(item)}
                >
                  Remove
                </button>
              )}
            </div>
            {isInCartPage && (
              <div className="cart-quantity">
                <button
                  type="button"
                  className="font-bold text-red-700"
                  onClick={()=> handleDecreaseCart(item)}
                
                >
                  -
                </button>
                <div className="count font-medium text-slate-400">{item.cartQuantity}</div>
                <button
                type="button"
                className="font-bold text-teal-500"
                onClick={()=> handleAddItem(item)}
               
                >+</button>
              </div>
            )}
          </div>
          <img
            src={CDN_URL + item.card.info.imageId}
            className="w-20"
            alt="item"
          ></img>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
