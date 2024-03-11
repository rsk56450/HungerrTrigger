import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CartDemo = () => {
  const p = useParams();
  console.log("params is  ", p.id2);

  useEffect(() => {
    console.log(
      "I got id here in use effect and now I can make an api call using fetch with this id ===>>>  ",
      p.id2
    );
  }, []);
  return (
    <>
      <div>
        <h1>This is card demo page </h1>
      </div>
    </>
  );
};
export default CartDemo;
