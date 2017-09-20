import React from 'react';
import { render } from 'react-dom';
require('./css/style.scss');

import { Header } from './components/header';
import { Home } from './components/home';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: 'Home'
        }
    }
    onGreet() {
        alert('Hello');
    }

    onChangeLinkName(name) {
        this.setState({
            homeLink: name
        });
    }

    render() {
        var user = {
            name: 'Zhao',
            age: 34,
            skills: ['Javascript', 'CSS', 'HTML']
        };
        return (
            <div className="container">
                <Header homeLink={this.state.homeLink} />
                <Home 
                    user={user} 
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                />
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));