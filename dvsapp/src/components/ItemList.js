import React, { Component } from 'react'

export class ItemList extends Component {
    render() {
        return (
            <div className = 'container'>
                <h6>Required Costs:</h6>
                <ul>
                    <li>Transportation</li>
                    <li>Food</li>
                    <li>Health Insurance</li>
                    <li>Car Insurance</li>
                    <li>Health Care</li>
                    <li>Car Loans</li>
                    <li>Personal Loans</li>
                    <li>Other</li>
                </ul>
                <h6>Relocation Costs:</h6>
                <ul>
                    <li>Hotel while in Transit</li>
                    <li>New Rental Deposit</li>
                    <li>Utility Hook-Up</li>
                    <li>Storage</li>
                    <li>New Monthly Rent</li>
                    <li>Car Rental</li>
                    <li>Gas</li>
                    <li>Cell Phone Disconnect Fee and Connect Fee</li>
                    <li>Moving Truck Rental</li>
                    <li>Moving Truck Gas</li>
                    <li>Mental Health Treatment</li>
                    <li>Additional Security</li>
                </ul>
                <h6>Income Sources</h6>
                <ul>
                    <li>Benefits</li>
                    <ul>
                        <li>Cash Aid</li>
                        <li>Food Stamps</li>
                    </ul>                    
                    <li>Assistance from Charities</li>
                    <li>Job</li>
                </ul>
            </div>
        )
    }
}

export default ItemList