import React from 'react'
import Tab from './Tab'
import PropTypes from 'prop-types'

const Tabs = props => {
    return (
        <div className = 'tabs'>
            <div className = 'items'>
                <span classname = 'title'>Budget Items</span>
                {props.tabs.map(tab => {
                    return (
                        <Tab selectTabHandler = {props.selectTabHandler} selectedTab = {props.selectedTab} tab = {tab} key = {tab} />
                    )
                })}
            </div>
        </div>
    );
};

Tabs.propTypes = {
    tabs: PropTypes.array.isRequired,
}

export default Tabs
