import React, { Component } from 'react';
import ColorContext from '../contexts/ColorContext';
// import LanguageContext from '../contexts/LanguageContext';
import {LanguageStore} from '../contexts/LanguageContext';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';

class App extends Component {
    //state={language:'english'}

    // onLanguageChange=language=>{
    //     //this.setState({language:language});//or
    //     this.setState({language:language});
    // }

    render() {
        return (
            <div className="ui container">
                {/* <div>
                    Select a Language:
                    <i className="flag us" onClick={()=>this.onLanguageChange('english')}/>
                    <i className="flag nl" onClick={()=>this.onLanguageChange('dutch')}/>
                </div> */}

                {/* <LanguageSelector onLanguageChange={this.onLanguageChange}/>

                <ColorContext.Provider value='red'>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate/>
                    </LanguageContext.Provider>
                </ColorContext.Provider> */}

                {/* using context as redux(not preferred) */}
                <LanguageStore>
                    <LanguageSelector/>

                    <ColorContext.Provider value='red'>
                            <UserCreate/>
                    </ColorContext.Provider>
                </LanguageStore>
                
                
            </div>
        );
    }
}

export default App;
