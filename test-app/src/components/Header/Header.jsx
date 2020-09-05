import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-primary p-2">
                <button className="btn btn-primary">User Page</button>
            </div>
        )
    }
}

export default Header;
