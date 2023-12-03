import React from 'react';
import axios from 'axios';

export default class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/user/all`)
            .then(res => {
                const users = res.data;
                this.setState({ users: users });
            })
    }



    render() {
        return (
            <ul>
                {
                    this.state.users
                        .map(person =>
                            <li key={person.id}>{person.username}, {person.firstName} {person.lastName}</li>
                        )
                }
            </ul>
        )
    }
}
