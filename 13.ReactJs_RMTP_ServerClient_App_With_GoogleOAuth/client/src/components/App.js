import React from 'react';
import { BrowserRouter,HashRouter,MemoryRouter,Route,Router,Link,Switch } from "react-router-dom";
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from "../history";

const App = () => {
    return (
        <div className="ui container">
            {/* <BrowserRouter> */}
            <Router history={history}>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                    <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                    <Route path="/streams/:id" exact component={StreamShow}/>
                    {/* when Route goes to "/streams/:id" the id variable can be 'new', so it renders both StreamCreate & StreamShow.so use switch to render only one at a time */}
                </Switch> 
            </div>
            </Router>
        </div>
    );
}

export default App;



{/* <BrowserRouter>
<Route path="/" exact component={page1}/>
<Route path="/pagetwo"  component={page2}/>
</BrowserRouter> */}
{/*default route is like extractedRoute.contains("/") which cause multiple components to appear on screen. to use like ===,use exact which means exact={true} */}

