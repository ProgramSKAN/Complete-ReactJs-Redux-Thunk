import React from 'react'
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY='AIzaSyD4cwosUbvXXIT_kLhstJq94q3t1gcQaE4';

class App extends React.Component {
    state={videos:[],selectedVideo:null}

    componentDidMount(){
        this.onTermSubmit('GOPRO 4K')
    }

    onTermSubmit = async term=>{
        const response=await youtube.get("/search",{
            params:{
                q:term,//query term
            }
        });
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    };

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                {this.state.videos.length} Videos
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;
