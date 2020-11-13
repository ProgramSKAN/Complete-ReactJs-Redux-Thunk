import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={lat:null,errorMessage:''};
    // }
    //OR with babel use below
    state={lat:null,errorMessage:''}

    componentDidMount(){
        console.log('App Component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat:position.coords.latitude.toFixed(5)}),
            (err)=>this.setState({errorMessage:err.message})
        );
    }
    
    componentDidUpdate(){
        console.log('Component was just updated - it rerendered');
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
        //    return <div>Latitude: {this.state.lat}</div>
           return <SeasonDisplay lat={this.state.lat}/>//PASSING STATES AS PROPS
        }
        
        // return <div>Loading...</div>
        return <Spinner message="Please Accept Location Request"/>
    }

    render(){
        return <div className="border red"> {this.renderContent()} </div>;
    };
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)

