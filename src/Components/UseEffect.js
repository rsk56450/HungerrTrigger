import { useEffect, useState } from "react";

const Use= ()=>{

    const[value,setValue]=useState("a");

   
    useEffect(()=>{
        console.log("use effect called from use bro page");
    },[value])

    function clied() {
        setValue("abc")
        console.log("button clickdde in function in use bro");
    }

    return(
        <>
        <div>
            {/* {setValue("abc")}; */}
            <h1>This is usebro page</h1>
            <button onClick={clied}>Click</button>
        </div>
        </>
    )

}

export default Use;