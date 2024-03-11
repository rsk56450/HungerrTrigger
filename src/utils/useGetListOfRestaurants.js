import { useEffect, useState } from "react";

const useGetList = (setbackupdata, setListOfRestaurants) => {
  console.log("set back up data  ", setbackupdata);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    console.log("ddddddddddddddddddddddd==========>>>>>>>>>>>>>  ", data);
    const json = await data.json();

    let newData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setbackupdata(newData);
    setListOfRestaurants(newData);

    console.log("data is ", newData);
  };

  useEffect(() => {
    fetchData();
    console.log("use effect of body called ");
  }, []);

  //  return data;
};

export default useGetList;
