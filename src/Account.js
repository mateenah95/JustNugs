import React from 'react';
import {Link} from 'react-router-dom';

import './Account.css';

class Account extends React.Component{
    constructor(props){
        super(props);

        this.getUserDetails = this.getUserDetails.bind(this);
    }

    getUserDetails(){
        if(this.props.user){
            return (
                <div className='row'>
                    <div className='col s4'>
                        <h2><u>Basic Info</u></h2>
                        <img width='150' height='150' className='display-pic' src={this.props.user.displayPic}></img>
                        <h3>{this.props.user.fName}</h3>
                        <h3>{this.props.user.lName}</h3>
                        <h3>Date of Birth: {this.props.user.dob}</h3>
                    </div>
                    <div className='col s4 middle-column'>
                        <h2><u>Contact Informtion</u></h2>
                        <hr />
                        <h4>{this.props.user.email}</h4>
                        <h4>{this.props.user.phone}</h4>
                        <hr />
                        <h2><u>Address</u></h2>
                        <hr />
                        <h4>{this.props.user.addrOne}</h4>
                        <h4>{this.props.user.addrTwo}</h4>
                        <h4>{this.props.user.city}</h4>
                        <h4>{this.props.user.postalCode}</h4>
                        <hr />
                    </div>
                    <div className='col s4'>
                        <h2><u>Order/Subscription History</u></h2>
                        <table className='striped'>
                            <thead>
                                <th>Order #</th>
                                <th>Order Item</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>319</td>
                                    <td>White Widow</td>
                                    <td>1 Oz</td>
                                    <td>$165.00/-</td>
                                    <td>1st Oct</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h4><em>Please login for account details.</em></h4>
                    <br />
                    <Link to='/signin' className='btn-large teal darken-1'>Signin</Link>
                </div>
            )
        }
    }

    render(){
        return (
            <div className='only-border center card teal darken-4 white-text'>
                <h1>Account</h1>
                {this.getUserDetails()}
                <br />
            </div>
        )
    }
}

export default Account;