import React, { Component } from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
    /*1.CONSUMING CONTEXT USING 'this.context'
    static contextType=LanguageContext;//contextType name mandatory

    render() {
        const text=this.context==='english'?'submit':'Voorleggen';
        return (
            <button className="ui button primary">{text}</button>
        );
    }
    //OR
    2.CONSUMING CONTEXT USING 'consumer'.used to consume from multiple contexts inside component
    */
   render() {
    return (
        <ColorContext.Consumer>
        {(color)=>
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language})=>language==='english'?'submit':'Voorleggen'}
                </LanguageContext.Consumer>
            </button>
        }
        
        </ColorContext.Consumer>
        
    );
}
}
//or// Button.contextType=LanguageContext;

export default Button;

















//without context as redux
// import React, { Component } from 'react';
// import ColorContext from '../contexts/ColorContext';
// import LanguageContext from '../contexts/LanguageContext';

// class Button extends Component {
//     /*1.CONSUMING CONTEXT USING 'this.context'
//     static contextType=LanguageContext;//contextType name mandatory

//     render() {
//         const text=this.context==='english'?'submit':'Voorleggen';
//         return (
//             <button className="ui button primary">{text}</button>
//         );
//     }
//     //OR
//     2.CONSUMING CONTEXT USING 'consumer'.used to consume from multiple contexts inside component
//     */
//    render() {
//     return (
//         <ColorContext.Consumer>
//         {(color)=>
//             <button className={`ui button ${color}`}>
//                 <LanguageContext.Consumer>
//                     {(value)=>value==='english'?'submit':'Voorleggen'}
//                 </LanguageContext.Consumer>
//             </button>
//         }
        
//         </ColorContext.Consumer>
        
//     );
// }
// }
// //or// Button.contextType=LanguageContext;

// export default Button;
