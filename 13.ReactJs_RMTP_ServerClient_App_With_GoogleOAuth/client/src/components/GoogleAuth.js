import React, { Component } from 'react';
import { connect } from "react-redux";
import { signIn,signOut } from "../actions";

class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('auth2',()=>{
            window.gapi.auth2.init({
            client_id:"497080488260-mfnpbun0qi73680tksjvdmqd6eu5q6jf.apps.googleusercontent.com",
            scope:'email'
                }).then(()=>{
                    this.auth=window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                })
        })
    }

    onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    onSignInClick=()=>{
        this.auth.signIn();
    }

    onSignOutClick=()=>{
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return null;
        }else if(this.props.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        }else{
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon"/>
                    Sign In With Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    // console.log(state);
    return {isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps,{
    signIn,
    signOut
})(GoogleAuth);






















//BELOW CODE IS WITHOUT REDUX

// import React, { Component } from 'react';

// class GoogleAuth extends Component {
//     state={isSignedIn:null}

//     componentDidMount(){
//         // window.gapi.load('client:auth2',()=>{
//         //     window.gapi.client.init({
//         //         clientid:"497080488260-mfnpbun0qi73680tksjvdmqd6eu5q6jf.apps.googleusercontent.com",
//         //         scope:'email'
//         //     }).then(()=>{
//         //         this.auth=window.gapi.auth2.getAuthInstance();
//         //         this.setState({isSignedIn:this.auth.isSignedIn.get()})
//         //     })
//         // });
//         window.gapi.load('auth2',()=>{
//             window.gapi.auth2.init({
//                 client_id:"497080488260-mfnpbun0qi73680tksjvdmqd6eu5q6jf.apps.googleusercontent.com"
//                     }).then(()=>{
//                         this.auth=window.gapi.auth2.getAuthInstance();
//                         this.setState({isSignedIn:this.auth.isSignedIn.get()})
//                         this.auth.isSignedIn.listen(this.onAuthChange);
//                     })
//         })
//     }

//     onAuthChange=()=>{
//         this.setState({isSignedIn:this.auth.isSignedIn.get()})

//     }

//     onSignInClick=()=>{
//         this.auth.signIn();
//     }

//     onSignOutClick=()=>{
//         this.auth.signOut();
//     }

//     renderAuthButton(){
//         if(this.state.isSignedIn===null){
//             return null;
//         }else if(this.state.isSignedIn){
//             return (
//                 <button className="ui red google button" onClick={this.onSignOutClick}>
//                     <i className="google icon"/>
//                     Sign Out
//                 </button>
//             )
//         }else{
//             return (
//                 <button className="ui red google button" onClick={this.onSignInClick}>
//                     <i className="google icon"/>
//                     Sign In With Google
//                 </button>
//             )
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.renderAuthButton()}
//             </div>
//         );
//     }
// }

// export default GoogleAuth;
