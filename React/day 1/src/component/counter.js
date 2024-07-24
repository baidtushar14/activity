import { useState } from "react";

function Counter() {
    const[count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if(count==0){
            alert("Count cannot be zero")
        }
        else{
            setCount(count-1)
        }
        
    }
    return ( 
        <div>
            <hr/>
            <h2>Count {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
     );
}

export default Counter;