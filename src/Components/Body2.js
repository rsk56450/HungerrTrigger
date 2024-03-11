import ResCards from "./ResCards";

import { useContext, useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCards";
import { Link } from "react-router-dom";
import useOnlineStat from "../utils/useOnlineStatus";
import useGetList from "../utils/useGetListOfRestaurants";
import { vegResCards } from "./ResCards";
import UserrContext from "../utils/UserContext";

let count = 0;
export const Body2 = () => {
  console.log("body renedered");

  const [serachText, setSearchText] = useState("");
  const [backup, setbackupdata] = useState([]);
  let [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [showFilteredRes, setShowFilteredRes] = useState(true);

  const NewVegResCards = vegResCards(ResCards);

  const { setUserName, loggedInUser } = useContext(UserrContext);

  const searchFunctionalityFunction = () => {
    // setShowFilteredRes(!showFilteredRes);

    let FilteredList = backup.filter((res) => {
      return res.info.name.toLowerCase().includes(serachText.toLowerCase());
    });
    // showFilteredRes ? setListOfRestaurants(FilteredList) : setListOfRestaurants(backup);
    setListOfRestaurants(FilteredList);
    if (serachText.length === 0) {
      console.log("I am chicked");
      console.log("back up ", backup);
      setListOfRestaurants(backup);
    }
  };

  const TopRatedResList = () => {
    setShowFilteredRes(!showFilteredRes);

    ListOfRestaurants = ListOfRestaurants.filter(
      (rest) => rest.info.avgRating > 4
    );

    showFilteredRes
      ? setListOfRestaurants(ListOfRestaurants)
      : setListOfRestaurants(backup);
  };

  const d = useGetList(setbackupdata, setListOfRestaurants);

  const statusIs = useOnlineStat();

  if (statusIs === false) {
    return (
      <>
        <h1>You are offline </h1>
      </>
    );
  }

  return ListOfRestaurants.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="bg-gradient-to-t from-slate-100 to-black ">
      <div className="flex-wrap" data-testid="Body_of_ResCards">
        <input
          type="text"
          data-testid="Search_Input"
          placeholder="Search Something"
          className=" p-2 m-4 border border-solid border-black"
          value={serachText}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchText(e.target.value);
            let displaydata = backup.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
              // return res.info.name.toLowerCase().includes(serachText.toLowerCase())
            });
            console.log("display data ", displaydata);
            displaydata.length === 0
              ? setListOfRestaurants(backup)
              : setListOfRestaurants(displaydata);
            // setListOfRestaurants(displaydata)
            //
          }}
        />
        <button
          className="py-2 px-2 mx-2 my-6 bg-green-300 rounded-md"
          onClick={searchFunctionalityFunction}
        >
          Search
        </button>

        <button
          className="px-4 py-2 mx-5 bg-gray-300 rounded-lg"
          onClick={TopRatedResList}
        >
          Top Rated Restaurants
        </button>

        {/* <label>UserName : </label>  */}
        {/* <input className="px-2 m-4 border border-solid border-black rounded-md" value={loggedInUser} type="text" onChange={(e)=> { console.log("see thsi === >>>  " , e.target.value);setUserName(e.target.value)}}/> */}
      </div>
      <div className="flex flex-wrap justify-between">
        {ListOfRestaurants.map((restaurants) => {
          console.log("restautants is veg = ", restaurants.info.veg);
          return (
            <Link
              to={"/restaurants/" + restaurants.info.id}
              key={restaurants.info.id}
              className="h-[400px] m-4 rounded-md"
            >
              {restaurants.info.avgRating < 4 ? (
                <ResCards resData={restaurants} />
              ) : (
                <NewVegResCards resData={restaurants} />
              )}
            </Link>
          );
        })}

        {/* <ResCards resData = {resList[0]} />
           <ResCards resData = {resList[1]} />
           <ResCards resData = {resList[2]} />
           <ResCards resData = {resList[3]} />
           <ResCards resData = {resList[4]} />
           <ResCards resData = {resList[5]} />
           <ResCards resData = {resList[6]} />
           <ResCards resData = {resList[7]} />
           <ResCards resData = {resList[8]} /> */}

        {/* function  filter () {
            resList.map(restaurants=>{
                if (restaurants.info.avgRating > 4) {
                    return (<ResCards key={restaurants.info.id} resData={restaurants}/>)
                }
            })
        } */}

        {/* <ResCards
           resName = "KFC"
           cuisine = "Burgers"
           /> */}
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <>
      <div id="Footer">
        <h4>This is footer1</h4>
      </div>
    </>
  );
};

export default Body2;
