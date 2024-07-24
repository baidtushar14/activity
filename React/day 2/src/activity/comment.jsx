import { useState,useEffect } from "react"
function Comment({postId}) {
    const [comment,setComment]=useState([])
    const fetchdata=async()=>{
        const resp=await fetch('https://jsonplaceholder.typicode.com/comments?postId='+postId)
        const json=await resp.json()
        setComment(json)
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return ( 
        <>
            {
                comment.map(item=>(
                    <div key={item.id}>
                        <h4>User: {item.name}</h4>
                        <h4>Message: {item.body}</h4>
                    </div>

                ))
            }
        </>
     );
}

export default Comment;