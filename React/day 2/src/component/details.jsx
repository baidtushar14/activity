import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"


function Details() {
    const params = useParams()
    const navigate=useNavigate()
    const id= params.id;
    const [user,setUser]=useState([])
    const fetchData=async()=>{
        const resp=await fetch('https://jsonplaceholder.typicode.com/users/'+id)
        const json=await resp.json()
        setUser(json)
    }
    const goBack=()=>{
        navigate('/userlist')
    }
    useEffect(()=>{
        fetchData()
    },[])
    return ( 
        <div>
            <h1>Detail Component</h1>
            {user &&
            <p>
                {user.id}<br/>
                {user.name}<br/>
                {user.email}<br/>
                {user.username}<br/>
                {user.website}<br/>
                {user.phone}<br/>
            </p>

            }
            <button onClick={goBack}>Back</button>
        </div>
     );
}

export default Details;