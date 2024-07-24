import { useState } from "react";

function Register() {
    const [user,setUser]=useState({name:'',email:'',username:'',password:''})
    const [list,setList]=useState([])
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        setList([...list,user])
        e.target.reset()
    }
    const deleteData=(email)=>{
        setList(list.filter(item=>item.email!==email))
    }
    return (
        <>
            <h3>Register Component</h3>
            <form className="Container" onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                    <label>Name</label>
                    <input type="text" placeholder="Alex Hales" className="form-control" name='name'
                    onChange={handleChange}/>
                </div>
                <div className="form-group mt-3">
                    <label>Email</label>
                    <input type="email" placeholder="John@gmail.com" className="form-control" name='email'
                    onChange={handleChange} />
                </div>
                <div className="form-group mt-3">
                    <label>Username</label>
                    <input type="text" placeholder="AlexHales" className="form-control" name='username' 
                    onChange={handleChange}/>
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input type="password" placeholder="*******" className="form-control" name='password'
                    onChange={handleChange}/>
                </div>
                <button type="submit" name="submit">Submit</button>

            </form>
            <h3>User list</h3>
            <table className="table table-bordered table-hover">
                <thead><tr><th>Name</th><th>Email</th><th>Username</th><th>Password</th></tr></thead>
                <tbody>
                    {
                        list.map(user=>(
                            <tr key={user.email}> 
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <button className="btn btn-success" onClick={()=>deleteData(user.email)}>Delete</button>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default Register;