import { useEffect, useState } from "react";

function Counter() {
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        console.log(('Update',count));
    },[count])
    return ( 
        <div>
            <h3>Counter component: {count}</h3>
            <button onClick={increment}>Counter</button>
        </div>
     );
}

export default Counter;