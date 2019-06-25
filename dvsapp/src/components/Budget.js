import React, { Component } from 'react'
import Header from './header/Header'
import BudgetForm from './BudgetForm'
import Footer from './footer/Footer'

export class Budget extends Component {
    render() {
        return (
            <div>
                <Header />
                <BudgetForm />
                <Footer />
            </div>
        )
    }
}

export default Budget
