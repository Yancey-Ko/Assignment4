import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

const Debits = (props) => {
	let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    }) 
    }
    return (
      <div>
        <h1>Debits</h1>
        <p1>
          <AccountBalance accountBalance = {props.accountBalance}/>
        </p1>
        {debitsView()}
          <form onSubmit={props.addDebit}>
            <input type="text" name="description" />
            <input type="number" name="amount" />
            <button type="submit">Add Debit</button>
          </form>
        <Link to="/userProfile"><button type = "button"> User Profile </button></Link>
        <Link to="LogIn"><button type = "button"> Log In </button></Link>
        <Link to="/Credits"><button type = "button">Credits</button></Link>
        <Link to="/"><button type = "button">Return to Home</button></Link>
      </div>
    )
}
export default Debits;