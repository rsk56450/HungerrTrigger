import React from "react";
import { useState } from "react";
import { useContext } from "react";
import UserrContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnlineStat from "../utils/useOnlineStatus";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let a = 10;

  const [btn, setbtn] = useState("Login");
  console.log("header rendered");
  const { loggedInUser, setUserName } = useContext(UserrContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems is ", cartItems);
  //  console.log("see this *********** " , loggedInUser , setUserName);

  // const {loggedInUser} = useContext(UserrContext)
  //  const [name,setName] = useState(loggedInUser);

  let status = useOnlineStat();

  useEffect(() => {
    // console.log("use effect called from header ");
  }, []);
  return (
    <div className="flex justify-between bg-gradient-to-r from-slate-400 to-black md:bg-gradient-to-r from-slate-400 to-black overflow-x-scroll md: ">
      <div className="">
        <Link to={"/"}>
          <img
            className="h-26 w-screen md:w-56 h-[100px]"
            src={
              "https://img.freepik.com/free-psd/isolated-hamburger-with-splash-ink-background_1409-3855.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709424000&semt=ais"
            }
          />
        </Link>
      </div>

      <div className="flex  font-bold text-white ">
        <ul className="flex items-center w-screen md:w-1/2">
          <li className="px-4">
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/about"> About</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact</Link>
          </li>
          {/* <li><Link to={"/grocery"}>Grocery</Link></li> */}
          {/* <li className="px-4">
              <Link to={"/grocery"}>Grocery</Link>
            </li> */}
          <li className="px-4">
            Online:{" "}
            {status ? <span className="ml-[10px]">✔️</span> : <span>❌</span>}{" "}
          </li>
          <Link to={"/cart"}>
            <li className="flex px-4 font-bold  md:text-xl">
              Cart{<p className="mx-2">{cartItems.length}</p>}
            </li>
          </Link>
          {/* <Link to={"/cartDemo/"+a}><li>Cart Demo Page</li></Link> */}

          <button
            className="h-(-1) px-4 bg-gray-300 mx-2 rounded-lg text-black"
            onClick={() => {
              setbtn(btn === "Login" ? "Logout" : "Login");
              console.log("btnnnnnnnnnnn=========>   ", btn);
              if (btn === "Login") {
                setUserName("Rohit Kadam");
              } else {
                setUserName("Default User");
                // console.log("this is the value of loddeinuse --------- " , loggedInUser);
              }

              //holds the previos value
            }}
          >
            {btn}
          </button>

          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
