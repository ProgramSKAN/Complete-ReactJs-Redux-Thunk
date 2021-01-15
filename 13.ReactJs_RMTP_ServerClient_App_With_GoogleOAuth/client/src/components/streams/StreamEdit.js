import React from 'react';
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream,editStream } from './../../actions';
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit=(formValues)=>{
        this.props.editStream(this.props.match.params.id,formValues);
    };
  
    render(){
        console.log(this.props)
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream,'title','description')}/>
                {/* initialValues={{title:"edit title",description:"edit des"}} >eg
                    initialValues={this.props.stream} >this is issue as onsubmit, all the values are submitted irrespective of we have field or not.so pass only the fields we using
                */}
            </div>
        );
    }  
}

const mapStateToProps=(state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{
    fetchStream,
    editStream
})(StreamEdit);






















// import React,{compose} from 'react';
// import { connect } from "react-redux";
// import { fetchStream } from './../../actions';

// class StreamEdit extends React.Component {
//     componentDidMount(){
//         this.props.fetchStream(this.props.match.params.id);
//     }
  
//     render(){
//         console.log(this.props)
//         if(!this.props.stream){
//             return <div>Loading...</div>
//         }
//         return (
//             <div>
//                 {this.props.stream.title}
//             </div>
//         );
//     }  
// }

// const mapStateToProps=(state,ownProps)=>{
//     return {stream:state.streams[ownProps.match.params.id]};
// }

// export default connect(mapStateToProps,{fetchStream})(StreamEdit);
