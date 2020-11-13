import React ,{ useState }from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items=[
    {
        title:'what is React',
        content:'React is a frontend javascript library'
    },
    {
        title:'React usage',
        content:'Declarative views make your code more predictable and easier to debug.'
    },
    {
        title:'why use React',
        content:'It is simple, easy to use, favorite among engineers'
    },
    {
        title:'How do you use React',
        content:'Use React by creating components'
    }
]

const options=[
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label:'The Color Green',
        value:'green'
    },
    {
        label:'The Color Blue',
        value:'blue'
    }
]

const showAccordion=()=>{
    if(window.location.pathname==='/'){
        return <Accordion items={items}/>
    }
};
const showList=()=>{
    if(window.location.pathname==='/list'){
        return <Search/>
    }
};
const showDropdown=()=>{
    if(window.location.pathname==='/dropdown'){
        return <Dropdown/>
    }
};
const showTranslate=()=>{
    if(window.location.pathname==='/translate'){
        return <Translate/>
    }
};
const showComponent=(route,component)=>{
    return window.location.pathname===route?component:null;
}
export default ()=>{
    const [selected,setSelected]=useState(options[0]);
    // const [showDropdown,setShowDropdown]=useState(true);

    return(
        <div>
            <br />

            {/* <Accordion items={items}/> */}
            {/* <Search/> */}

            {/* <Dropdown label="Select a Color" options={options} selected={selected} onSelectedChange={setSelected}/> */}
            {/* <Translate/> */}

            {/* {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()} */}

            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a Color" options={options} selected={selected} onSelectedChange={setSelected}/>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    );
}

