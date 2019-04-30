import React from 'react';
import Header from './header/Header';
import Likedin from './linkedin/Linkedin';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Likedin} />
                    <Route path="/header" exact component={Header} />
                </div>               
            </BrowserRouter>
        );
    }
}

export default App;