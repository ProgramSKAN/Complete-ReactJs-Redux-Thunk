import styled,{css} from "styled-components";
import PropTypes from 'prop-types';

const largeStyles=({large})=>{
    if(large){
        return css`
            padding:10px;
            border-radius:5px;
            font-size:1.5em;
            `   
    }
    else{
        return css`
            padding:8px;
            border-radius:4px;
            font-size:1em;
            `
    }
}

const Button=styled.button`
    color: white;
    background:${(props)=>props.secondary?props.theme.secondaryColor:props.theme.primaryColor};
    font-weight:bold;
    //padding:${p=>p.large?'16px':'8px'};//OR
    /* ${p=>p.large?css`
        padding:10px;
        border-radius:5px;
        font-size:1.5em;
        `:css`
        padding:8px;
        border-radius:4px;
        font-size:1em;
        `} OR*/
    ${largeStyles}

    //NOT PREFER//${p=>p.large?'padding:16px;font-size:1.8em':'padding:8px'}

    box-shadow:none;
    border:none;
    width:100%;
    display:block;
    white-space:none;

    &:disabled{
        background:#eee;
        color:#666;
    }
`;


Button.propTypes={
    large:PropTypes.bool,
    secondary:PropTypes.bool
}

export {Button};


//WITH STYLED COMPONENT BELOW CODE IS NOT REQUIRED
// const Button=({children})=>{
// return <button>{children}</button>
// }