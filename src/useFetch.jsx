import { useEffect, useState } from "react";

const UseFetch = (url) => {

    const [data, setDate] = useState();
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState();

    return ( 
        useEffect(()=>{
            fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
        },[url])
     );
}
 
export default UseFetch;