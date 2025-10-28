import { useState } from "react";

function ControlledFromApp(){

    const [name , setName] = useState("Sai Praneeth Mokalla");
    const [email,setEmail] = useState("saipraneethmokalla@gmail.com");
    const [age, setAge] = useState();


    const handleFormSubmit = (event) =>{
        event.preventDefault();
        const data = {
            name : name,
            email:email,
            age:age
        }
        console.log(data);
    }
    return (
        <form className="p-6 bg-green-300 rounded-2xl bordered-2 border-green-600 flex flex-col gap-3 items-center"
        onSubmit={(event)=>handleFormSubmit(event)}>
        
        <input className="bg-white placeholder-gray-400" 
        type="text"
        value={name}
        placeholder="Enter Name" 
        required />

        <input className="bg-white placeholder-gray-400" 
        type="email"
        value={email}
        placeholder="Enter Email"
        required />

        <input className="bg-white placeholder-gray-400"
        type="text"
        value={age}
        placeholder="Enter your age"
        required />

        <button className="bg-red-600 text-white hover:bg-red-500"
        type="submit">Register</button>
        </form>
    )
}

export default ControlledFromApp;