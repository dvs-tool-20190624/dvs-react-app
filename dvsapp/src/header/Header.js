import React, { Component } from 'react'
import logo from '../images/logo.png'

export class Header extends Component {
    render() {
        return (
            <div className = 'navBar'>
                <img className = 'navLogo' src = {logo} alt = 'logo' />
                <button><a href = '.#'>Home</a></button>
            </div>
        )
    }
}

export default Header