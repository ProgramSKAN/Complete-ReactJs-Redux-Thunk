import styled,{keyframes} from "styled-components";

const rotation=keyframes`
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
    /*or
     0%{}
    100%{} */
`;

const Spinner=styled.div`
    height:30px;
    width:30px;
    border:1.5px solid ${p=>p.theme.secondaryColor};
    border-radius:50%;
    border-right:none;
    border-bottom:none;
    margin:16px auto;
    animation:${rotation} 1s linear infinite;

`;

export {Spinner};