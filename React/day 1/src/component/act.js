import products from './product.json'
    function Product() {
        return (
            <>
                <table className="table table-bordered table-striped">
                    <thead><tr><th>ID</th><th>Name</th><th>Used</th></tr></thead>
                    <tbody>
                        {
                            products.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.Used}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        );
    }

export default Product;