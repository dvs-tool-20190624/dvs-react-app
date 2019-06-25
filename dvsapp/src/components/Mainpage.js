import React, { Component } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Login from './login/Login'
import Register from './login/Register'

export class Mainpage extends Component {
    render() {
        return (
            <div>
                <div className = 'header'>
                    <Header />
                </div>
                <div className = 'main'>
                    <h1>Welcome</h1>
                    <h4>to</h4>
                    <h2>Your Survivors Tool</h2>
                </div>
                <div className = 'form'>
                    <div className = 'login'>
                        <h3>Login</h3>
                        <Login />
                    </div>
                    <div className = 'register'>
                        <h3>Register</h3>
                        <Register />
                    </div>
                </div>
                <div className = 'footer'>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Mainpage
