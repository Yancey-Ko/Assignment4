import React, {Component} from 'react';
//Shows account balance
class AccountBalance extends Component {
  render() {
    return (
        <div>
          Balance: {this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;
