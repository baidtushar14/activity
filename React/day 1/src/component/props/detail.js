function Detail({data}) {
    return ( 
        <div className="m-3 p-3" style={{border:'2px solid blue'}}>
            <h3>Customer Detail</h3>
            <h3>Id: {data.id}</h3>
            <h3>First Name: {data.fname}</h3>
            <h3>Last Name: {data.lname}</h3>
            <h3>Email: {data.email}</h3>
        </div>
     );
}

export default Detail;