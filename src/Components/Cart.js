import { useDispatch, useSelector } from "react-redux";
import ItemList2 from "../Components/ItemListBro";
import { removeItem, clearCart } from "../Slices Folder/cartSlice";

import { useState } from "react";
import { EnhancedItemList } from "../Components/ItemListBro";

const CartPage = () => {
  const dispatch = useDispatch();

  //  useState();

  let finalTotal = 0;
  let priceDATA = 0;

  const cartItems = useSelector((store) => store.cart.items);
  const NewItemList = EnhancedItemList();
  cartItems.map((i) => {
    finalTotal =
      finalTotal +
      (i.card.info.price ? i.card.info.price : i.card.info.defaultPrice);
  });
  // console.log("data is ----------------->>>>>>>>>>>>>>>    " , cartItems);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex justify-evenly">
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-4/4  m-auto my-5">
          <button
            className="p-2 m-2 bg-black rounded-lg text-white"
            onClick={() => {
              handleClearCart();
            }}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 ? (
            <div>
              <h1 className="py-5">Please Add Something...!</h1>
              <img
                className="w-2/4 m-auto"
                src={
                  "https://blogzine.webestica.com/assets/images/icon/empty-cart.svg"
                }
              ></img>
            </div>
          ) : (
            //<ItemList2 items={cartItems} />

            <NewItemList items={cartItems} />
          )}
        </div>
        {cartItems.length === 0 ? (
          ""
        ) : (
          <div className="bg-blue-200 w-1/2 mx-32 ">
            <h1 className="font-bold text-center my-10">
              This is total - ₹ {finalTotal / 100}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
