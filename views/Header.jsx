import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'
class Header extends Component {
    render() {
        return (
            <header className="navbar">
                <nav>
                    <ul className="nav-items">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Messages</a>
                        </li>
                        <li>
                            <a href="">Notifications</a>
                        </li>
                    </ul>
                    <Form inline>
                        <FormGroup>
                            <input type="text" placeholder="Search for..." className="input-theme" />
                        </FormGroup>
                    </Form>
                </nav>
            </header>
        )
    }
}

export default Header