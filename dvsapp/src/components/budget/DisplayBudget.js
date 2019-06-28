import React from 'react'
import ExpenseList from '../display/ExpenseList'
import BalanceDisplay from '../display/BalanceDisplay'

const DisplayBudget = () => {
    return (
        <div className = 'card card-body'>
            <h3 className = 'text-center'>Your Survivor's Tool</h3>
            <BalanceDisplay />
            <ExpenseList />
        </div>
    )
}

export default DisplayBudget
