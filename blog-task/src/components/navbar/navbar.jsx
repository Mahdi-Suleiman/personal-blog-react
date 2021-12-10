import React, { Component } from "react";
import './navbar.css'
class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header id="navbarComponentHeader">
                <nav id="navbar">
                    <div id="logo">
                        <p>M. S</p>
                    </div>
                    <div >
                        <button id="homeButton">Home</button>
                    </div>
                    <div id="loginRegisterButtons">
                        <button>Login</button>
                        <button>Signup</button>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;