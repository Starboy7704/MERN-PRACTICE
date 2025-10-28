import { useState } from "react";

function UncontrolledFormApp(){

    const [name,setName]=useState("");

    function handleFormNameChange(event){
        let nameInput = event.target.value;
        setName((previousName)=>{
            previousName = nameInput;
            return previousName;
        })

    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        const data = {
            name : name
        }
        console.log(data);
    }

    return (
        <form onSubmit={(event)=>handleFormSubmit(event)}>
        <input className="bg-white placeholder-gray-400"
            onChange={(event)=>handleFormNameChange(event)}
            type="text"
            placeholder="Enter Your Name"
            required
        />
        <button className="bg-red-600 text-white hover:bg-red-500" type="submit">Register</button>

        </form>
    )
}
export default UncontrolledFormApp;