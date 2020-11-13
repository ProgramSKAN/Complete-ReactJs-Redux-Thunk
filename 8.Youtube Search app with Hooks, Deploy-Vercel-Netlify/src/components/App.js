import React,{useState,useEffect} from 'react'
import SearchBar from "./SearchBar";
//import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from './../hooks/useVideos';

const App=()=>{
    const [selectedVideo,setSelectedVideo]=useState(null);
    const [videos,search]=useVideos('GOPRO 4K');

    useEffect(()=>{//select first video in search list and rerender
        setSelectedVideo(videos[0]);
    },[videos])

    /*const [videos,setVideos]=useState([]);
    const [selectedVideo,setSelectedVideo]=useState(null);

    useEffect(() => {
        onTermSubmit('GOPRO 4K')
    }, []);

    const onTermSubmit = async term=>{
        const response=await youtube.get("/search",{
            params:{
                q:term,//query term
            }
        });
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    MAKE THIS COMMENTED CODE AS REUSABLE VIDEOS DATA CUSTOM HOOK
    */

    const onVideoSelect=(video)=>{
        setSelectedVideo(video)
    }
    return (
        <div className="ui container">
            {/* <SearchBar onFormSubmit={onTermSubmit}/> */}
            <SearchBar onFormSubmit={search}/>
            {videos.length} Videos
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                    <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                    <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
                    {/* OR in above>> onVideoSelect={(video)=>setSelectedVideo(video))} 
                        OR onVideoSelect={setSelectedVideo)
                    */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
