import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header";

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

import { useContext } from "react";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const GroceryComponent = lazy(() => import("./Components/Grocery"));
const About = lazy(() => {
  return import("./Components/AboutUs");
});
const Body2 = lazy(() => import("./Components/Body2"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <Body2 />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactBro />,
        errorElement: <Err />,
      },
      {
        path: "/restaurants/:resId",
        element: <Menu />,
      },
      {
        path: "/Usebro",
        element: <Use />,
      },
      {
        path: "/cartDemo/:id2",
        element: <CartDemo />,
      },
      {
        path: "/resbeauty",
        element: <ResMenuBeautify />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerCard />}>
            <GroceryComponent />
          </Suspense>
        ),
      },
    ],
    errorElement: <Err />,
  },
]);

root.render(
  <RouterProvider router={appRouter}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
