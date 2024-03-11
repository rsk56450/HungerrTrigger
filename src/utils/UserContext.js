import { createContext } from "react";

const UserrContext = createContext({
  loggedInUser: "Default User",
});

export default UserrContext;
