import React from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component{
    state={ images:[] }

    // onSearchSubmit(term){
    //     axios.get(.....).then(response=>console.log(response.data.results))
    // }//use promise then OR async await
    onSearchSubmit=async (term)=>{
        const respone=await unsplash.get('/search/photos',{//ASYNC
            params:{query:term}
        });
        this.setState({images:respone.data.results});
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found : {this.state.images.length} Images
                <ImageList images={this.state.images}/>
            </div>
        );
    }
} 

export default App;