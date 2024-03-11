import { useState } from "react";
import ItemList2 from "./ItemListBro";

const ResCategory = ({ data, showItems, setShowIndex, resetSetShowIndex }) => {
  // const [showItems,setShowItems] = useState(false)
  // console.log("data iis  " , data);
  // console.log("setShowINDEX  ==>>  " , setShowIndex);
  //  console.log("show Items " , showItems);

  // console.log("rest func " , resetSetShowIndex);
  // const [open,setOpen] = useState(false)
  const [open, setOpen] = useState(showItems);
  //  console.log("open is " , open);

  const handleClick = () => {
    setOpen(!showItems);
    open ? restAcc() : setShowIndex();

    // open ? !showItems : setShowIndex()  ;
    console.log("open in handle clicke ", open);

    //   console.log();
  };
  const restAcc = () => {
    resetSetShowIndex();
  };

  // console.log(data);
  return (
    <div>
      {/* Accordian Header */}

      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length}){" "}
          </span>
          <span onClick={restAcc}>⬇️</span>
        </div>
        {showItems && <ItemList2 items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
