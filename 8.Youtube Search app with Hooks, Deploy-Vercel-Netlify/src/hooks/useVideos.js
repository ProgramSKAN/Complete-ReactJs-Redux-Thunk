import {useState,useEffect} from 'react';
import youtube from "../api/youtube";

const useVideos = (defaultSearchTearm) => {
    const [videos,setVideos]=useState([]);

    useEffect(() => {
        search(defaultSearchTearm)
    }, [defaultSearchTearm]);

    // const onTermSubmit = async term=>{
    const search = async term=>{
        const response=await youtube.get("/search",{
            params:{
                q:term,//query term
            }
        });
        setVideos(response.data.items);
    };

    return [videos,search];
    //OR// return {videos,onTermSubmit};
}

export default useVideos;
