import { useDispatch } from "react-redux";
import { addItem, removeItem, editQuantity } from "../Slices Folder/cartSlice";
import { useState } from "react";

const ItemList2 = ({ items }) => {
  const [qtyVar, setqtyVar] = useState(0);
  const ImgUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

  const dispatch = useDispatch();

  const addItemsButtonClick = (item) => {
    dispatch(addItem(item));
  };

  const removeItemsButtonClick = (item) => {
    dispatch(removeItem(item));
  };

  console.log("seet his ----->>>>    ", items[0].card.info.id);

  return (
    <div>
      {items.map((item, index) => (
        <div
          // key={item.card.info.id}
          key={index}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12" key={item.card.info.id}>
            <div>
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
            <div className="absolute flex flex-col md:flex-row  md:justify-between">
              <button
                className="bg-black text-white p-2 rounded-lg w-8 hover:bg-slate-400 absolute md:mt-[0px]"
                onClick={() => {
                  removeItemsButtonClick(item);
                }}
              >
                -
              </button>
              <button
                className="p-2 rounded-lg bg-black text-white shadow-lg hover:bg-slate-400 mt-[60px] md:mt-[0px] md:ml-[80px]"
                onClick={(e) => {
                  addItemsButtonClick(item);
                  console.log("curerent target = ", e.target);
                }}
              >
                {" "}
                +{" "}
              </button>
            </div>

            <img src={ImgUrl + item.card.info.imageId} className="w-full"></img>
            {/* <h1 className="m-2 font-bold"> QTY X {qtyVar} </h1> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export const EnhancedItemList = () => {
  return (props) => {
    return (
      <>
        <ItemList2 {...props} />
      </>
    );
  };
};
export default ItemList2;
