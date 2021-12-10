import React, { Component } from "react";
import './register.css'
class Registeration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    }
    componentDidMount() {
        const RegisteredUsers = JSON.parse(localStorage.getItem("RegisteredUsers"));
        const emptyArray = [];
        if (!RegisteredUsers) {
            localStorage.setItem("RegisteredUsers", JSON.stringify(`${emptyArray}`))
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.firstname.length === 0) {

        }
    }
    setSuccess = (input) => {
        const inputControl = input.parentElement;
        inputControl.className = 'inputControl success'
    }

    render() {
        return (
            <main id="RegistrationOuterContainer">
                <div id="RegistrationInnerContainer">
                    <div id="signup">
                        <h3>Sign Up</h3>
                    </div>
                    <form id="registerForm" action="" method="POST" onSubmit={this.handleSubmit}>
                        <div className="inputControl">
                            <label htmlFor="firstname">FirstName <span className="redStar">*</span> </label>
                            <input type="text" id="firstname" placeholder="Firstname" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                            <small>error message</small>
                        </div>

                        <div className="inputControl">
                            <label htmlFor="lastname">LastName <span className="redStar">*</span></label>
                            <input type="text" id="lastname" placeholder="Lastname" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
                            <small>error message</small>
                        </div>

                        <div className="inputControl">
                            <label htmlFor="email">Email <span className="redStar">*</span></label>
                            <input type="text" id="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                            <small>error message</small>
                        </div>

                        <div className="inputControl">
                            <label htmlFor="password">Password <span className="redStar">*</span></label>
                            <input type="password" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                            <small>error message</small>
                        </div>

                        <div className="inputControl">
                            <label htmlFor="repeatPassword">Repeat Password <span className="redStar">*</span></label>
                            <input type="password" id="repeatPassword" placeholder="Repeat Password" name="repeatPassword" value={this.state.repeatPassword} onChange={this.handleChange} />
                            <small>error message</small>
                        </div>

                        <button type="submit" id="registerButton">Register</button>
                    </form>
                </div>
            </main>
        )
    }
}

export default Registeration;