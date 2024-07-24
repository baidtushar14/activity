import { useState } from "react";
import Form from "./form";
import Detail from "./detail";
function List() {
    const [list,setList]=useState([])
    const [select,setSelect]=useState(null)
    const adddata=(obj)=>{
        setList([...list,obj]);
    }
    return ( 
        <div className="m-3 p-3" style={{border:'2px solid green'}}>
            <h3>Add Customer</h3>
            <table className="table table-bordered table-hover table-striped">
                <thead><tr><th>First Name</th><th>Last Name</th><th>Email</th></tr></thead>
                <tbody>
                    {
                        list.map(item => (
                            <tr key={item.id} onClick={()=>setSelect(item)}>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.email}</td>
                                </tr>
                        ))
                    }
                </tbody>
            </table>
            {/* <ul>
                {
                    list.map(item=>(
                        <li key={item.id} onClick={()=>setSelect(item)}>{item.email}</li>
                    ))
                }
            </ul> */}
            <Form adddata={adddata}/>
            {select &&<Detail data={select}/>}
        </div>
     );
}

export default List;