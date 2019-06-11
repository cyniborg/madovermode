import React from 'react';
import {Route, Switch} from 'react-router-dom';

import MenuBar from './components/MenuBar'
import EnquiryList from './components/EnquiryList'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'

function App() {
    return (
        <div className="container">
            <MenuBar/>
            <EnquiryList/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/:name" component={ProductDetail} />
            </Switch>

        </div>
    );
}

export default App;
