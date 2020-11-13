import React from 'react';
import ReactDOM from 'react-dom';

//Functional Component
// const App=()=> {
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=>console.log(position),
//         (err)=>console.log(err)
//    )
//     return (
//         <div>
//             Latitue:
//         </div>
//     )
// }

class App extends React.Component{
    constructor(props){
        super(props);

        this.state={lat:null,errorMessage:''};

        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({lat:position.coords.latitude.toFixed(5)})//when SETSTATE component rerenders
                // this.state.lat=position.coords.latitude//NEVER DO THIS direct assignment
            },
            (err)=>{
                this.setState({errorMessage:err.message})
            }
       );
    }


    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
           return <div>Latitude: {this.state.lat}</div>
        }
        
        return <div>Loading...</div>
    };
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)

