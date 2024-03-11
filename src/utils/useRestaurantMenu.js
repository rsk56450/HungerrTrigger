import { useEffect, useState } from "react";

const useRestaurantMenu = (resID) => {
  console.log("inside the hook");

  const [restInfo, setrestInfo] = useState(null);

  useEffect(() => {
    fetchData();
    console.log("use effect in userRestuarant hook called ");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" +
        resID +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    setrestInfo(json.data);
  };

  return restInfo;
};

export default useRestaurantMenu;
