import { useState } from "react";

function Form(props) {
    const{adddata}=props;
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    const[input,setInput]=useState('')
    const handleClick=()=>{
        adddata({id:Date.now(),fname:fname,lname:lname,email:input});
    }
    return ( <div className="m-3 p-3" style={{border:'2px solid blue'}}>
        <h3>Customer Information</h3>
        <label style={{marginRight:"20px",marginLeft:"20px"}}>First Name</label>
        <input type="text" onChange={(e)=>setFname(e.target.value)} placeholder="Enter First Name" />
        <label style={{marginRight:"20px",marginLeft:"20px"}}>Last Name</label>
        <input type="text" onChange={(e)=>setLname(e.target.value)} placeholder="Enter Last Name"/>
        <label style={{marginRight:"20px",marginLeft:"20px"}}>Email:</label>
        <input type="email" onChange={(e)=>setInput(e.target.value)} placeholder="Enter your email"/>
        <button onClick={handleClick}>Add Data</button>

        </div>
    );
}

export default Form;