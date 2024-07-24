import { useState } from "react";

function FormInput() {
    const [input,setInput]=useState("");
    const [age,setAge]=useState(18);

    const handle=(e)=>{
        setInput(e.target.value)
    }
    const submit=(e)=>{
        e.preventDefault();
        alert("Welcome "+input+" "+age)
    }
    return ( 
        <form onSubmit={submit}>
            <input type="text" placeholder="Enter the name" onChange={handle}/>
            <input type="text" placeholder="Enter the name" onChange={(e)=>setAge(e.target.value)} value={age}/>
            <button type="submit">Save</button>
        </form>
     );
}

export default FormInput;