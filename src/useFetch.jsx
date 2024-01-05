import { useEffect, useState } from "react";

const UseFetch = (url) => {

    const [data, setData] = useState();
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState();

    useEffect(()=>{
        fetch(url)
        .then(response => {
            setPending(true);
            if(!(response.ok)){
                throw Error("Could not fetch data");
            }
            return response.json()
        })
        .then(data => {
            setData(data);
            setPending(false)
        }).catch(e=>{
            setPending(false)
            setError(e.message)
        })
    },[url])
    return {data,isPending,error};
}
 
export default UseFetch;