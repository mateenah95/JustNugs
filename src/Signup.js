import React from 'react';
import axios from 'axios';

import './SignUpIn.css';

class Signup extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            fName: '',
            lName: '',
            phone: '',
            display: ''
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
        }
    }

    signup(){
        axios.post('http://localhost:5000/signup', {...this.state})
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
            displayPic: ''
        });
        setTimeout(()=>{alert('cleared')},100);
    }

    render(){
        return (
            <div className="portal center card teal darken-4 white-text">
                <h1><u>Sign Up</u></h1>
                <br />
                <div className='credentials'>
                    <h4>Email</h4>
                    <input name='email' type='email' placeholder='Enter email here' value={this.state.email} onChange={this.updateData} autoFocus/>
                    <h4>Password</h4>
                    <input name ='password' type='password' placeholder='Enter password here' onChange={this.updateData} value={this.state.password} />
                    <h4>Confirm Password</h4>
                    <input name ='confirmPassword' type='password' placeholder='Confirm password here' onChange={this.updateData} value={this.state.confirmPassword} />
                    <h4>First Name</h4>
                    <input name ='fName' type='text' placeholder='Enter first name here' onChange={this.updateData} value={this.state.fName} />
                    <h4>Last Name</h4>
                    <input name ='lName' type='text' placeholder='Enter last name here' onChange={this.updateData} value={this.state.lName} />
                    <h4>Phone #</h4>
                    <input name ='phone' type='text' placeholder='Enter phone number here' onChange={this.updateData} value={this.state.phone} />
                    <h4>Display Picture</h4>
                    <input name ='displayPic' type='text' placeholder='Enter display picture URL here' onChange={this.updateData} value={this.state.displayPic} />
                </div>
                <br />
                <div className='row'>
                        <button className='btn-large teal darken-3' onClick={this.signup}>Sign Up</button>
                        <button className='btn-large cyan darken-1' onClick={this.clear}>Clear</button>
                </div>
            </div>
        )
    }
}

export default Signup;