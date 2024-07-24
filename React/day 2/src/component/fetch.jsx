import { useEffect, useState } from "react";

function Fetch() {
    const [data, setData] = useState(null)
    const getData = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            const json = await resp.json();
            setData(json);
        } catch (error) {

        }
    }
    useEffect(() => { getData() }, [])
    return (
        <div>
            {data ? data.id : <p>Loading..</p>}
        </div>
    );
}

export default Fetch;