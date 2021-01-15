import React, { Component } from 'react';
import { Field,reduxForm } from "redux-form";
import { connect } from "react-redux";

class StreamForm extends Component {

    renderError({error,touched}){
        if(touched&&error){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    // renderInput(formProps){
    //     console.log(formProps)
    //     // return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
    //     //OR
    //     return <input {...formProps.input} />
    // }//OR
    renderInput=({input,label,meta})=>{
        const errorStyle=`field ${meta.error && meta.touched?'error':''}`;
        return (
            <div className={errorStyle}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit=(formValues)=>{
        //event.preventDefault();//this will handled by redux form through 'handleSubmit'
        this.props.onSubmit(formValues);
    }   

    render() {
        //console.log(this.props);
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate =(formValues)=>{
    const errors={}
    if(!formValues.title){
        errors.title='Title is Required'
    }
    if(!formValues.description){
        errors.description='Description is Required'
    }
    return errors;
}



export default reduxForm({
    form:'streamForm',
    validate:validate
})(StreamForm);


