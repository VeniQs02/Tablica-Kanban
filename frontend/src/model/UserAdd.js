import React from 'react';
import axios from 'axios';

export default class UserAdd extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    handleFirstNameChange(e) {
        this.setState({firstName: e.target.value})
    }

    handleLastNameChange(e) {
        this.setState({lastName: e.target.value})
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }


    handleSubmit = event => {
        event.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };
        console.log(user)
        axios.post(`http://localhost:8080/user/add`, {user})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form className="registerForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Nickname:</label>
                    <input type="text" id="username" name="username" onChange={this.handleUsernameChange}/>

                    <label htmlFor="firstName">First name:</label>
                    <input type="text" id="firstName" name="firstName" onChange={this.handleFirstNameChange}/>

                    <label htmlFor="lastName">Last name:</label>
                    <input type="text" id="lastName" name="lastName" onChange={this.handleLastNameChange}/>

                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" onChange={this.handleEmailChange}/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={this.handlePasswordChange}/>

                    <label htmlFor="passwordConf">Password confirmation:</label>
                    <input type="password" id="passwordConf" name="passwordConf" />

                    <br/>

                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}
