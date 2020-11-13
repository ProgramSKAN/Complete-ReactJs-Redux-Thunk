import { selectSong } from "../actions";

import { combineReducers } from "redux";

const songsReducer=()=>{
    return [
        {title:'Rain Drops',duration:'4:05'},
        {title:'I like that',duration:'2:45'},
        {title:'All star',duration:'3:10'},
        {title:'Everybody, backstreetboys',duration:'2:25'}
    ];
};

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectSong;
};

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})