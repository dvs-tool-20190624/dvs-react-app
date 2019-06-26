import React, { Component } from 'react'
import Header from './header/Header'
import Tabs from './Tabs'
import Cards from './Cards'
import Footer from './footer/Footer'
import { tabData, cardData } from '../data'

export class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'all',
            tabs: [],
            cards: []
        };
    }
    componentDidMount = () => {
        this.setState({
            tabs: tabData,
            cards: cardData,
        })
    }
    changeSelected = tab => {
        this.setState({
            selected: tab,
        })
    };
    filterCards = () => {
        switch(this.state.selected) {
            case 'all':
                return this.state.cards;
            case 'required':
                return this.state.cards.filter(card => card.tab === this.state.selected)
            default:
                return this.state.cards;
        }
    };
    render() {
        return (
            <div classname = 'budgetPage'>
                <Header />
                <Tabs tabs={this.state.tabs} selectTabHandler={this.changeSelected} selectedTab={this.state.selected} />
                <Cards cards={this.filterCards()} />
                <Footer />
            </div>
        )
    }
}

export default Budget
