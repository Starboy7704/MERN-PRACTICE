import { useEffect, useState } from "react";

function App(){

    const [count , setCount] = useState(0);
    const [name , setName] = useState("");

    useEffect(()=>{
        console.log("No dependency array callback has been triggered!");
    })

    useEffect (()=>{
        console.log("useEffect callback 1 has been triggered!");
    },[])

    useEffect(()=>{
        console.log("effect 2");
    })
    useEffect(()=>{
        console.log("Count is updated :" , count);
    },[count])
    useEffect(()=>{
        console.log("Name is Updated",name);
    },[name])

    function incrementCount(){
        setCount((prevCount) => prevCount += 1);
    }


    return (
        <>
            <p>Count : {count}</p>
            <button className="bg-red-500 p-3 text-white "
            value={count}
            onClick={incrementCount}>
                Increment
            </button>

            <input 
            className="bg-gray-200"
            type="text" 
            value={name}
            placeholder="Enter"
            onChange={(event)=>setName(event.target.value)} />
        </>
    )
}

export default App;