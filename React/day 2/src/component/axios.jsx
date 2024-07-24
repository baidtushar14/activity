import axios from "axios"
import { useEffect, useState } from "react"

function Axios() {
    const [users,setUsers]=useState(null)
    const fetchData=async()=>{
        const resp=await axios.get('https://jsonplaceholder.typicode.com/users/1')
        setUsers(resp.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (  
        <div>
            {users && <h4>{users.name}</h4>}
        </div>
    );
}

export default Axios;