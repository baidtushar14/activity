import { useState } from "react";

function Todo() {
    const [list,setList] = useState([])
    const [input,setInput] = useState('')
    const handleChange=(e)=>{
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list,{id:Date.now(),task:input,completed:false}])
        e.target.reset()
    }
    const statusupdate=(id)=>{
        setList(
            list.map(
                item=>{
                    if(item.id==id){
                        item.completed=!item.completed
                    }
                    return item
                }
            )
        )
    }
    const deleteData = (id) => {
        setList(list.filter(item => item.id !== id))
    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <label className="form-label"><h2>Input The To-Do Task</h2> </label><br />
                <input type="text" name="todo" placeholder="Attend the meeting" onChange={handleChange}/>
                <button type="submit">Add List</button>
            </form>
            <table className="table table-bordered table-hover">
                <thead><tr><th>ID</th><th>List</th><th>Status</th></tr></thead>
                <tbody>
                    {
                        list.map(list => (
                            <tr key={list.id} >
                                <td>{list.id}</td>
                                <td>{list.task}</td>
                                <td>{list.completed?'completed':'pending' }</td>
                                <button className="btn btn-success" onClick={()=>statusupdate(list.id)}>Check</button>
                                <button className="btn btn-success" onClick={()=>deleteData(list.id)}>Delete</button>
                            
                                </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default Todo;