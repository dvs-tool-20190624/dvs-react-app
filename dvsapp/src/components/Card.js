import React from 'react'
import PropTypes from 'prop-types'

const Card = props => {
    return (
        <div className = 'card'>
            <div className = 'headline'>{props.card.headline}</div>
            <div className = 'amountField'></div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
}

export default Card
