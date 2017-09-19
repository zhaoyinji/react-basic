import React from 'react';

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            user: props.user,
            status: 0
        }
    }

    onIncreaseAge() {
        this.state.user.age += 3;
        this.setState({
            user: this.state.user
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
                </div>
            </div>
        );
    }
}