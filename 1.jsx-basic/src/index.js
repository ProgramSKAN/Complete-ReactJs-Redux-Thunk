import React from 'react';//Modules.  name 'React' can be any
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Click Again!'
}

//Function Component
// const App=function(){
const App=()=>{
    const buttonText='Click!';
    const btnStyle={backgroundColor:'red',color:'white'};
    const text1=1234;
    const text2=['Hi','There'];
    const text3=[10,20,30,40];
    const text4={text:'Click object'};


    //return <div>Hi There!</div>
    //OR
    // return <div>
    //     Hi There!
    //     </div>
    //OR
    /*INVALID
    return
    <div>Hi There</div>
    */
   return(
    <div>
        <label  className="label" htmlFor='name'>Enter Name:</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor:'blue',color:'white'}}>{buttonText}</button>

        <hr/>
        <button style={btnStyle}>{getButtonText()}</button>
        <div>{text1}</div>
        <div>{text2}</div>
        <div>{text3}</div>
        {/* <div>{text4}</div>  INVALID */}
        <div>{text4.text}</div>
    </div>
   );
};
//in jsx reclape background-color with backgroundColor.any name with - ,remove and use camelcase
//in jsx replace class with className because class is as javascript keywork
//in jsx replace for with htmlFor

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);