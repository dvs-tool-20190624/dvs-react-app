import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loginSuccess} from '../../actions/actions'

export class Register extends Component {
    state = {
        creds:{
            name: '',
            username: '',
            email: '',
            password: ''
           
        }
    }
    handlechange = (e) => {
        e.preventDefault();
        this.setState({
            creds:{
                ...this.state.creds,
                [e.target.name] : e.target.value
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginSuccess(this.state.creds)
    }
    render() {
        if(this.props.isloggedin){
            this.props.history.push('/budget')
        }
        console.log(this.props.loggedin, this.props.isfetching)
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input onChange = {this.handlechange}
                    type = 'text'
                    placeholder = 'name'
                    name = 'name'
                    value = {this.state.name}
                    />
                    <input onChange = {this.handlechange}
                    type = 'username'
                    placeholder = 'username'
                    name = 'username'
                    value = {this.state.username}
                    />
                    <input onChange = {this.handlechange}
                    type = 'email'
                    placeholder = 'email'
                    name = 'email'
                    value = {this.state.email}
                    />
                    <input onChange = {this.handlechange}
                    type = 'password'
                    placeholder = 'password'
                    name = 'password'
                    value = {this.state.password}
                    />
                    <button value = 'submit'>Submit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    isloggedin:state.loggingIn,
    isfetching:state.isfetching
})

export default connect (
    mapStateToProps,
    {loginSuccess}
)(Register)
