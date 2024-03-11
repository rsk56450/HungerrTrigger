import { useEffect, useState } from "react";

const useOnlineStat = () => {
  const [status, setStatus] = useState(true);
  console.log("online status wala hook called ");

  useEffect(() => {
    window.addEventListener("online", () => {
      setStatus(true);
      console.log("online wala event lister called ");
    });

    window.addEventListener("offline", () => {
      console.log("offline wala event lister called ");
      setStatus(false);
    });
  }, []);

  return status;
};

export default useOnlineStat;
