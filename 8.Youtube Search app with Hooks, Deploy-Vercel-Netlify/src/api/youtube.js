import axios from "axios";

const KEY='AIzaSyD4cwosUbvXXIT_kLhstJq94q3t1gcQaE4';


export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",//snippet summary of video
        maxResults:5,
        type: 'video',
        key:KEY
    }
});

