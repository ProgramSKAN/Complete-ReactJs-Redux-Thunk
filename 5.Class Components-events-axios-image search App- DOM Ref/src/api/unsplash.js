import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 5xYc4gjIbO-6bnchviadFADZcEuy_6fzB-HozbaH_Xw'
    }
});