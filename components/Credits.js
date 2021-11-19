import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Credits = (props) => {
	let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0,10);
            return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
        }) 
    }
    return (
      <div>
        <h1>Credits</h1>
        <p1>
          <AccountBalance accountBalance = {props.accountBalance}/>
        </p1>
        {creditsView()}
          <form onSubmit={props.addCredit}>
            <input type="text" name="description" />
            <input type="number" name="amount" />
            <button type="submit">Add Credit</button>
          </form>
        <Link to="/userProfile"><button type = "button"> User Profile </button></Link>
        <Link to="LogIn"><button type = "button"> Log In </button></Link>
        <Link to="/Debits"><button type = "button">Debits</button></Link>
        <Link to="/"><button type = "button">Return to Home</button></Link>
    </div>
    )
}
export default Credits;