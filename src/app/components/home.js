import React from 'react';

export class Home extends React.Component {
    render() {
        var user = this.props.user;
        return(
            <div className="wrapper">
                <div className="sidebar">
                </div>

                <div className="context container">
                    <h1>Hello {user.name}!</h1>
                    <p>Your age: {user.age}</p>
                    <p>Your skills:</p>
                    <ul>
                        {user.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}