import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const headers = {
    Authorization : "bearer "+"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTZmY2Q2ZmJmNTNmMzJkZTAwOTZiZDQzYzM3MGViNyIsInN1YiI6IjY0ZTBlZWY0NGE1MmY4MDBlNDM5Mjg1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XIfcqKlpy4qtYwQ8jWQUq56s_SLpe8KVxqwhgIXHiZg"
}

export const fetchDataFromApi = async(url,params)=>{
    try {
        const {data} = await axios.get(baseUrl+url,{
            headers,
            params,
        })
        return data;
    } catch (error) {
        console.log(error)
        return error
    }
}