import { useEffect, useState } from "react";



const useFetch=(url, options, params, page)=>{
    const [data, setData]=useState(null);
    const [isLoading, setIsLoading]=useState(true);
    const [error, setError]=useState(null);
    const getData= async ()=>{
        setIsLoading(true);
        try{
            const res= await fetch(url)
            const json= await res.json();
            setData(json);
            if(!res.ok) throw {error: res.status, description: res.statusText}
        }catch(e){
            setError(e);
        }finally{
            setIsLoading(false);
        }
        
    }
    useEffect(()=>{
       
        getData();
    },[params, page])

    return{
        data,
        isLoading,
        error

    }
}
export default useFetch;