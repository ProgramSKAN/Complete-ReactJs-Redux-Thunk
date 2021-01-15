import React,{useState,useEffect,useRef,useContext} from 'react';
import styled,{ThemeContext} from 'styled-components';
import { Link as ReactRouterDomLink ,useLocation} from "react-router-dom";
import {Toggle} from "./Toggle";

const HeaderWrapper=styled.header`
    height:60px;
    width:100%;
    box-sizing:border-box;
    display:flex;
    padding:0 16px;
    position:fixed;
    top:0;
    /* background-image:linear-gradient(to right, #f8049c,#fdd54f); */
    background-image:linear-gradient(to right, ${p=>p.theme.primaryColor},${p=>p.theme.secondaryColor});
    border-bottom: 3px solid ${p=>p.theme.secondaryColor};
`;

const Menu= styled.nav`
    /* display:flex; */
    display:${p=>p.open?'block':'none'};
    font-family:'Open Sans';
    position:absolute;
    width:100%;
    top:60px;
    left:0;
    padding:8px;
    box-sizing:border-box;
    border-bottom: 3px solid ${p=>p.theme.secondaryColor};
    background:${p=>p.theme.bodyBackgroundColor};

    @media(min-width:768px){//if width>768px
        display:flex;
        background:none;
        left:initial;
        top:initial;
        position:relative;
        width:initial;
        border-bottom:none;
        margin:auto 0 auto auto;
    }
`;

const MobileMenuIcon=styled.div`
    margin:auto 0 auto auto;
    width: 25px;
    min-width:25px;
    padding:5px; 
    >div{//> means child of MobileMenuIcon
        height:3px;
        background:${p=>p.theme.bodyFontColor};
        margin:5px 0;
        width:100%;
    }

    @media(min-width:768px){
        display:none;
    }
`;

// const MenuAlt=styled(Menu)`//OVERRIDE MENU
//     border-top:5px solid black;
// `;


const Link=({isActive,children,...props})=>{
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    )
}
const StyledLink=styled(Link)`//IF WE DIRECT OVERIDE LINK THEN IT CAN'T TAKE USERDEFINED PROPERTIES LIKE 'isActive'
    padding:4px 8px;
    display:block;
    text-align:center;
    box-sizing:border-box;
    margin:auto 0;
    font-weight:${p=>p.isActive?'bold':'normal'};
    color:${p=>p.theme.bodyFontColor};
`;



function useOutsideClick(ref,MenuOpen) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                MenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
export default function Header() {
    const {pathname}=useLocation();
    const [menuOpen,setMenuOpen]=useState(false);
    const {id,setTheme}=useContext(ThemeContext);

    const wrapperRef=useRef(null);
    useOutsideClick(wrapperRef,setMenuOpen);

    return (
        <HeaderWrapper ref={wrapperRef}>
            <MobileMenuIcon onClick={()=>setMenuOpen(s=>!s)}>
                <div/>
                <div/>
                <div/>
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                {/* <Link to="/">Home</Link>
                <Link to="/">Login</Link> */}

                <StyledLink to="/" isActive={pathname==='/'}>
                    Home
                </StyledLink>
                <StyledLink to="/login" isActive={pathname==='/login'}>
                    Login
                </StyledLink>
                <Toggle  isActive={id==='dark'} onToggle={setTheme}/>
            </Menu>
        </HeaderWrapper>
    )
}
