import React from 'react';
// import { selectSong } from "../actions/index";//OR
import { selectSong } from "../actions";//as it is named a index.js, we can directly point to folder
import SongList from './SongList';
import SongDetail from './SongDetail';

const App=()=>{
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                <SongList/> 
                </div>
                <div className="column eight wide">
                <SongDetail/> 
                </div>
            </div>
        </div>
    );
}

export default App;