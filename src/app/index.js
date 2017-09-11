import React from 'react';
import { render } from 'react-dom';
require('./css/style.scss');

import { Header } from './components/header';
import { Home } from './components/home';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Home/>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));