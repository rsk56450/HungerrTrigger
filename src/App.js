import logo from "./logo.svg";
import "./App.css";
import About from "./Components/AboutUs";
import Header from "./Components/Header";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import UserrContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import ShimmerCard from "./Components/ShimmerCards";
import CartPage from "./Components/Cart";
import ContactBro from "./Components/ContactUs";
import Err from "./Components/Error";
import Menu from "./Components/MenuPage";
import Use from "./Components/UseEffect";
import CartDemo from "./Components/CartPageDemo";
import ResMenuBeautify from "./Components/RestBeautyCards";

import GroceryComponent from "./Components/Grocery";
import { useContext } from "react";
import { useState } from "react";
import Body2 from "./Components/Body2";

const App = () => {
  const { loggedInUser } = useContext(UserrContext);

  const [userName, setUserName] = useState(loggedInUser);

  // useEffect(()=>{
  //   const data = {
  //     name:"Rohit Kadam22",
  //   };
  //   setUserName(data.name);
  // },[])

  return (
    <>
      <Provider store={appStore}>
        <UserrContext.Provider value={{ loggedInUser: userName, setUserName }}>
          {/* <UserrContext.Provider value={{loggedInUser}}> */}
          {/* <UserrContext.Provider value={{loggedInUser:"Elon Musk"}}> */}
          <Header />
          {/* </UserrContext.Provider> */}

          <Outlet />
        </UserrContext.Provider>
      </Provider>
    </>
  );
};

export default App;
