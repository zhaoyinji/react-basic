import React from 'react';

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            user: props.user,
            status: 0,
            homeLink: props.initialLinkName
        }
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
        console.log('Constructor');
    }

    componentWillMount() {
        console.log('Component will mount');
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Component will receive props', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should component update', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component will update', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    onIncreaseAge() {
        this.state.user.age += 3;
        this.setState({
            user: this.state.user
        });
    }

    onChangeLinkName() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        
        return(
            <div className="wrapper">
                <div className="sidebar">
                </div>

                <div className="context container">
                    <h1>Hello {this.state.user.name}!</h1>
                    <p>Status: {this.state.status}</p>
                    <p>Your age: {this.state.user.age}</p>
                    <p>Your skills:</p>
                    <ul>
                        {this.state.user.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                    <button className="btn btn-primary" onClick={() => this.onIncreaseAge()}>Increase age</button>
                    <hr/>
                    <button className="btn btn-primary" onClick={this.props.greet}>Greeting</button>
                    <hr/>
                    <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)} />
                    <button className="btn btn-primary" onClick={this.onChangeLinkName.bind(this)}>Change link</button>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    user: React.PropTypes.object,
    greet: React.PropTypes.func,
    initialLinkName: React.PropTypes.string
}