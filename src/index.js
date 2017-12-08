import React from 'react';
import ReactDOM from 'react-dom';


class Signup extends React.Component {
    render() {
        return(
            <div>
                <h1> Sign Up! </h1>
                <form action="/signup" method="post">
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" class="form-control" name="username"></input>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password"></input>
                    </div>

                    <button type="submit" class="btn btn-warning btn-lg">Signup</button>
                </form>
            </div>
        )
    }
};

class Login extends React.Component {
    render() {
        return(
            <div>
                <h1> Log In! </h1>
                <form action="/login" method="post">
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" class="form-control" name="username"></input>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password"></input>
                    </div>

                    <button type="submit" class="btn btn-warning btn-lg">Login</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Signup />, document.getElementById('signup'));
ReactDOM.render(<Login />, document.getElementById('login'));
