import React, { Component } from "react";
import './footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer id="myFooter">
                <p> Copyright &copy; 2021 - Mahdi Suleiman </p>
            </footer>
        );
    }
}

export default Footer;