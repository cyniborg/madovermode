import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import MenuBar from './components/MenuBar';
import EnquiryList from './components/EnquiryList';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <MenuBar/>
                <EnquiryList/>
                <Switch>
                    <Route path="/" exact render = {props => <Home fromRouter = {props} />} />
                    <Route path="/:name" component = {ProductDetail} />
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
