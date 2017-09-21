import React from 'react';
import { render } from 'react-dom';
require('./css/style.scss');

import { Header } from './components/header';
import { Home } from './components/home';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: 'Home',
            homeMounted: true
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

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {
        let user = {
            name: 'Zhao',
            age: 34,
            skills: ['Javascript', 'CSS', 'HTML']
        };
        let homeCmp = '';
        if (this.state.homeMounted) {
            homeCmp = (
                <Home 
                    user={user} 
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                />
            );
        }
        return (
            <div className="container">
                <Header homeLink={this.state.homeLink} />
                {homeCmp}
                <hr/>
                <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-default">(Un)Mount home component</button>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));