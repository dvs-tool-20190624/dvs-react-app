import React from 'react'
import InputIncome from './InputIncome'
import InputExpenses from './InputExpenses'
import DisplayBudget from './DisplayBudget'

const Budget = () => {
    return (
        <div className = 'row'>
            <div className = 'col-lg-4'>
                <InputIncome />
                <InputExpenses />
            </div>
            <div className = 'col-lg-8'>
                <DisplayBudget />
            </div>
        </div>
    )
}

export default Budget
