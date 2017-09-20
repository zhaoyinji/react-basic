import React from 'react';

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            user: props.user,
            status: 0,
            homeLink: props.initialLinkName
        }
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