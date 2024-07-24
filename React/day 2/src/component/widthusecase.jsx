import { useEffect, useState } from "react";

function Widthusecase() {
    const[witdth,setWidth]=useState(window.innerWidth);
    useEffect(()=>{
        const handle=()=>setWidth(window.innerWidth);
        window.addEventListener('resize',handle);

        return(()=>{
            window.removeEventListener('resize',handle)
        })
    })
    return (  
        <h1>Window width: {witdth}</h1>
    );
}

export default Widthusecase;