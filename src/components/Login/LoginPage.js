import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import data from '../../database/admin.json';

class LoginPage extends Component {

    constructor(props) {
        super(props)
    }

    onSubmitHandler = (event) => {
        const username = event.target[0].value
        const password = event.target[1].value
        if (data.username === username && data.password === password) {
            this.props.history.push('/')
        } else {
            alert('Invalid Credentials')
        }
    }
    
    render() {
        return (
            <div className="form">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="username" />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="password" />
                    </div>
                    <div className="button-container">
                        <button type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        )
    }

}

export default withRouter(LoginPage);