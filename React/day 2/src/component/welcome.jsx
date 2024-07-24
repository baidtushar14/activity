import { useEffect } from "react";

function Welcome() {
    useEffect(()=>{
        console.log('Component mounted');
        
        return(()=>{
            console.log('Component Unmounted');
        })
    },[])
    return ( 
        <div>
            <h2>Welcome Component</h2>
        </div>
     );
}

export default Welcome;