import { useEffect, useState } from "react";

function App(){
    const [count,setCount]=useState(0);

    // setInterval(()=>{
    //     setCount((prevCount)=> prevCount + 1)
    // },1000)


//   setInterval(()=>{
//     setCount((prevCount) => prevCount + 1)
//   }, 1000)

    useEffect(()=>{
        if(true){
            setInterval(()=>{
            setCount((prevCount)=> prevCount + 1)
        },1000)
        }
    },[])

    return(
        <>
            <p>Count : {count}</p>
            
        </>
    )
}

export default App;
