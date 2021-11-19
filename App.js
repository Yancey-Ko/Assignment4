import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
import axios from "axios";

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
	  debits: [],
	  credits: [],
    }
  }

	 mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  
    async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits")
    let credits = await axios.get("https://moj-api.herokuapp.com/credits")
   
    //get data from API response
    debits = debits.data
    credits = credits.data

    let debitSum = 0, creditSum = 0;
    debits.forEach((debit) => {
      debitSum += debit.amount
    })
    credits.forEach((credit) => {
      creditSum += credit.amount
    })

    let accountBalance = creditSum - debitSum;
    this.setState({debits, credits, accountBalance});
  } 
  
  addDebit = (e) => {
  //send to debits view via props
  //updates state based off user input
  e.preventDefault();
  const description  = e.target[0].value;
  const amount  = Number(e.target[1].value);
  console.log(description, amount);
}

addCredit = (e) => {
  //send to debits view via props
  //updates state based off user input
  e.preventDefault();
  const description  = e.target[0].value;
  const amount  = Number(e.target[1].value);
  console.log(description, amount);
}

  render() {
	const { debits } = this.state;
	const { credits } = this.state;
    const DebitsComponent = () => (<Debits addDebit={this.addDebit} debits={debits} />);
	const CreditsComponent = () => (<Credits addCredit={this.addCredit} credits={credits} />);
	const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
		
    );

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
			<Route exact path="/Login" render={LogInComponent}/>
			<Route exact path="/Debits" render={DebitsComponent}/>
			<Route exact path="/Credits" render={CreditsComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;