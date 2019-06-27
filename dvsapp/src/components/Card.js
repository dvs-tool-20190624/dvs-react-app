import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
    constructor() {
        super();
        this.state = {
            budget: ''
        };
    }
    handleAdd = event => {
        event.preventDefault();
        this.props.addAmount({ value: this.state.budget, completed: false});
        this.setState({ budget: '' });
    };
    render() {
    return (
        <div className = 'card'>
            <div className = 'fieldName'>{props.card.fieldName}</div>
            <div className = 'fieldAmount'>
                <form onSubmit = {this.handleAdd}>
                    <input
                        onChange = {event => this.setState({ budget: event.target.value})}
                        name = 'amount'
                        value = {this.state.budget}
                        placeholder = 'Enter the amount'
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
}

export default Card