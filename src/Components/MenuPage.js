import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerCard from "./ShimmerCards";
import { useParams } from "react-router-dom";

import ResCategory from "./RestaurantCategoryAccordian";
import { useState } from "react";

const Menu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const resID = useParams();
  const id = resID.resId;

  const restInfo = useRestaurantMenu(id);

  if (restInfo === null) {
    console.log("inside if of return shimmer card the hook ");
    return <ShimmerCard />;
  }

  const { itemCards } =
    restInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const filteredDa = restInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  const ItemCategoryData = filteredDa.filter((d) => {
    return (
      d?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  // console.log("ItemCategory data " , ItemCategoryData);

  return (
    <>
      {console.log("insised return of restpage")}
      <div className="text-center">
        <h1 className="font-bold text-3xl text-center my-4">
          {restInfo?.cards[0]?.card?.card?.info?.name}
        </h1>
        <h2 className="text-center my-4 font-bold">
          {restInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")}
        </h2>

        {/* {categories accordions} */}
        {ItemCategoryData.map((category, index) => (
          <ResCategory
            key={category?.card?.card?.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index);
            }}
            resetSetShowIndex={() => setShowIndex(null)}
            data={category?.card?.card}
          />
        ))}
      </div>
    </>
  );
};
export default Menu;
