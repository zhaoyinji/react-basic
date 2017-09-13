import React from 'react';
import { render } from 'react-dom';
require('./css/style.scss');

import { Header } from './components/header';
import { Home } from './components/home';

class App extends React.Component {
    render() {
        var user = {
            name: "Zhao",
            age: "34",
            skills: ['Javascript', 'CSS', 'HTML']
        };
        return (
            <div className="container">
                <Header/>
                <Home user={user}/>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));