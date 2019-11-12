import React from 'react';
import axios from 'axios';

import './SignUpIn.css';

class Signup extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            fName: '',
            lName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            displayPic: '',
            addrOne: '',
            addrTwo: '',
            city: '',
            postalCode: '',
            dob: ''
        }

        this.updateData = this.updateData.bind(this);
        this.signup = this.signup.bind(this);
        this.clear = this. clear.bind(this);
    }

    updateData(e){
        switch(e.target.name){
            case 'email':
                this.setState({email: e.target.value})
                break;
            case 'password':
                this.setState({password: e.target.value});
                break;
            case 'confirmPassword':
                this.setState({confirmPassword: e.target.value});
                break;
            case 'fName':
                this.setState({fName: e.target.value});
                break;
            case 'lName':
                this.setState({lName: e.target.value});
                break;
            case 'phone':
                this.setState({phone: e.target.value});
                break;
            case 'displayPic':
                    this.setState({displayPic: e.target.value});
                    break;
            case 'addrOne':
                this.setState({addrOne: e.target.value});
                break;
            case 'addrTwo':
                this.setState({addrTwo: e.target.value});
                break;
            case 'city':
                this.setState({city: e.target.value});
                break;
            case 'postalCode':
                this.setState({postalCode: e.target.value});
                break;
            case 'dob':
                this.setState({dob: e.target.value});
                break;
        }
    }

    signup(){
        axios.post('https://justnugs-api.herokuapp.com/signup', {...this.state})
        .then(response => {
            this.clear();
            alert("Signup Successful")
        })
        .catch(err => alert("Signup Failed"));
    }

    clear(){
        this.setState({
            email: '',
            password: '',
            confirmPassword: '',
            fName: '',
            lName: '',
            phone: '',
            displayPic: '',
            addrOne: '',
            addrTwo: '',
            city: '',
            postalCode: '',
            dob: ''
        });
        setTimeout(()=>{alert('cleared')},100);
    }

    render(){
        return (
            <div className="only-border center card teal darken-4 white-text">
                <h1><u>Sign Up</u></h1>
                <br />
                <div className='row'>
                    <div className='col s3 signup-col'>
                    <h4>First Name</h4>
                        <input name ='fName' type='text' placeholder='Enter first name here' onChange={this.updateData} value={this.state.fName} />
                        <h4>Last Name</h4>
                        <input name ='lName' type='text' placeholder='Enter last name here' onChange={this.updateData} value={this.state.lName} />
                        <h4>Email</h4>
                        <input name='email' type='email' placeholder='Enter email here' value={this.state.email} onChange={this.updateData} autoFocus/>
                        <h4>Date Of Birth</h4>
                        <input name ='dob' type='text' placeholder='Enter date of birth here' onChange={this.updateData} value={this.state.dob} />
                        <h4>Phone #</h4>
                        <input name ='phone' type='text' placeholder='Enter phone number here' onChange={this.updateData} value={this.state.phone} />
                    </div>
                    <div className='col s1'></div>
                    <div className='col s4 signup-col'>
                        <h4>Address Line # 1</h4>
                        <input name ='addrOne' type='text' placeholder='Enter address line 1 here' onChange={this.updateData} value={this.state.addrOne} />
                        <h4>Address Line # 2</h4>
                        <input name ='addrTwo' type='text' placeholder='Enter address line 2 here' onChange={this.updateData} value={this.state.addrTwo} />
                        <h4>City</h4>
                        <input name ='city' type='text' placeholder='Enter city name here' onChange={this.updateData} value={this.state.city} />
                        <h4>Postal Code</h4>
                        <input name ='postalCode' type='text' placeholder='Enter postal code here' onChange={this.updateData} value={this.state.postalCode} />
                    </div>
                    <div className='col s1'></div>
                    <div className='signup-col col s3 '>
                        <h4>Password</h4>
                        <input name ='password' type='password' placeholder='Enter password here' onChange={this.updateData} value={this.state.password} />
                        <h4>Confirm Password</h4>
                        <input name ='confirmPassword' type='password' placeholder='Confirm password here' onChange={this.updateData} value={this.state.confirmPassword} />
                        <h4>Display Picture</h4>
                        <input name ='displayPic' type='text' placeholder='Enter display picture URL here' onChange={this.updateData} value={this.state.displayPic} />
                    </div>
                </div>
                <br />
                <div className='row'>
                        <button className='btn-large teal darken-3' onClick={this.signup}>Sign Up</button>
                        <br />
                        <br />
                        <button className='btn-large cyan darken-1' onClick={this.clear}>Clear All</button>
                </div>
            </div>
        )
    }
}

export default Signup;