import { useEffect } from "react";
import { useState } from "react"
import { fetchDataFromApi } from "../api";

const useFetch=(url)=>{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(null);
    const [error,setError] = useState(null);

    useEffect(()=>{
        setLoading("Loading...");
        setData(null);
        setError(null);
        fetchDataFromApi(url).then((res)=>{
            setData(res);
            setLoading(false);
            // console.log(res);
        }).catch((err)=>{
            setLoading(false);
            setError("Somrthing went wrong")
        });

    },[url])
    return {data,loading,error};
}

export default useFetch