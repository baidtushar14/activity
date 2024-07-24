import { Link, Route, Routes } from "react-router-dom";

function Profile() {
    return ( <h1>Profile</h1> );
}
function Setting() {
    return ( <h1>Setting</h1> );
}


function Dashboard() {
    return (  
        <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to='profile'>Profile</Link>
                <Link to='setting'>Setting</Link>
            </nav>
            <Routes>
                <Route path="profile" element={<Profile/>}/>
                <Route path="setting" element={<Setting/>}/>
            </Routes>
        </div>
    );
}

export default Dashboard;