import { useEffect, useState } from "react";



const useFetch=(url, options)=>{
    const [data, setData]=useState(null);
    const [isLoading, setIsLoading]=useState(true);
    const getData= async ()=>{
        
        setIsLoading(true);
        const res= await fetch(url)
        const json= await res.json();
        setData(json);
        setIsLoading(false)
        
    }
    useEffect(()=>{
       
        getData();
    },[])

    return{
        data,
        isLoading

    }
}
export default useFetch;