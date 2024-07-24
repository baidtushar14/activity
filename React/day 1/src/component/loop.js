// function Loops() {
//     const array=[1,2,3,4,5,6,7,5,2]
//     return ( 
//         <>
//             <ul>
//                 {
//                     array.map(item=>(
//                         <li key={item}>{item}</li>
//                     ))
//                 }
//             </ul>
//         </>
//      );
// }
function Loops() {
    const array = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Unknown' }]
    return (
        <>
            <table className="table table-bordered table-striped">
                <thead><tr><th>ID</th><th>Name</th></tr></thead>
                <tbody>
                    {
                        array.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}


export default Loops;