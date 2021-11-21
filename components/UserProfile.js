import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
//Displays profile and balance
class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
		  <AccountBalance accountBalance={this.props.accountBalance}/>
		  <Link to="/">Return to Home</Link>
        </div>
		
    );
  }
}

export default UserProfile;
