import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Budget from '../budget/Budget'
import ItemList from './ItemList'

function MainTwo() {
    return (
        <div className = 'App'>
            <Header />
            <div className = 'row'>
            <div className = 'col order-first'>
                <ItemList />
            </div>
            <div className = 'container my-5'>
                <Budget />
            </div>   
            </div>         
            <Footer />
        </div>
    )
}

export default MainTwo