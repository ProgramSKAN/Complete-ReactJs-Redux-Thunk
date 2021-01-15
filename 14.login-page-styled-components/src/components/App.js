import React,{useState} from 'react';
import {Button} from "components/common";
import { createGlobalStyle,ThemeProvider, useTheme } from "styled-components";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Login from 'components/pages/Login';
import Home from 'components/pages/Home';
import Header from './common/Header';
import LightTheme from 'themes/light';
import DarkTheme from 'themes/dark';

const GlobalStyle=createGlobalStyle`
  body{
    background:${p=>p.theme.bodyBackgroundColor};
    min-height:100vh;
    margin:0;
    color:${p=>p.theme.bodyFontColor};
    font-family:'Kaushan Script';
  }
`;



function App() {
  const [theme,setTheme]=useState(LightTheme);
  return (
    <ThemeProvider theme={{...theme,setTheme:()=>{
      setTheme(s=>s.id==='light'?DarkTheme:LightTheme)
    }}}>
      <GlobalStyle/>  
      {/* <Button primary>Button</Button>
      <Button secondary>Button</Button>
      <Button disabled>Button</Button>
      <Button primary large>lARGE Button</Button> */}

      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
