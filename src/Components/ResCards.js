import { ImageLink } from "../utils/constant";

import UserrContext from "../utils/UserContext";
import { useContext } from "react";

const ResCards = (props) => {
  const { loggedInUser, setUserName } = useContext(UserrContext);
  const { resData } = props;
  console.log("This is resData =============>>>>>>>>>>>>>>>   ", resData);

  const { name, cuisines, avgRating } = resData?.info;
  const time = resData?.info?.sla?.deliveryTime;
  return (
    <>
      <div
        data-testid="resCardsIdbro"
        className="my-4 p-4 w-[250px]  rounded-lg h-full hover:bg-slate-400 hover:text-black ease-in-out duration-100 bg-black text-white"
      >
        <div className="rounded-lg shadow-sm">
          <img
            className="w-full h-[200px] rounded-md"
            src={ImageLink + resData.info.cloudinaryImageId}
          />
          <h4 className="break-words font-bold py-2 text-lg">{name}</h4>
          <h4 className="break-words">{cuisines.join()}</h4>
          <h4 className="break-words">{avgRating}</h4>
          <h4 className="break-words">{time / 10} minutes</h4>
          <h4>User : {loggedInUser}</h4>
        </div>

        {/* <Footer/> */}
      </div>
    </>
  );
};

export const vegResCards = (ResCards) => {
  // const NewCard = Card;
  // console.log("Argument of vegCard is ", arguments);
  return (props2) => {
    console.log("props inside veg Res Cards ", props2);
    //console.log("props spread " , {...props})
    return (
      <>
        <div data-testid="resCardsIdbro">
          <label
            className=" font-bold text-gray-800 m-2 p-2 absolute bg-white rounded-md"
            aria-labelledby="new_Upt"
          >
            High Rated Restaurant ✨{" "}
          </label>
          <ResCards {...props2} />
        </div>
      </>
    );
  };
};

export default ResCards;
