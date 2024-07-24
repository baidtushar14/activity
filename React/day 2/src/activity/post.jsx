import { useEffect, useState } from "react";
import Comment from "./comment";

function Post() {
    const[post,setPost]=useState([])
    const fetchdata=async()=>{
        const resp=await fetch('https://jsonplaceholder.typicode.com/posts')
        const json=await resp.json()
        setPost(json)
    }
    useEffect(()=>{fetchdata()},[])
    return (  
        <>
        {
            post.map(item=>(
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <Comment postId={item.id}/>
                    <hr/>
                </div>
            ))
        }
        </>
    );
}

export default Post;