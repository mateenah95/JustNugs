import React from 'react';

import './SignUpIn.css';
import axios from 'axios';

class Signin extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.updateData = this.updateData.bind(this);
        this.clear = this.clear.bind(this);
        this.signin = this.signin.bind(this);
    }

    updateData(e){
        switch(e.target.name){
            case 'email':
                this.setState({email: e.target.value})
                break;
            case 'password':
                this.setState({password: e.target.value})
                break;
        }
    }

    clear(){
        this.setState({
            email: '',
            password: ''
        })
    }

    signin(){
        axios.post(`http://localhost:5000/login`, {...this.state})
        .then(response => {
            this.clear();
            if(response.data.message.email){
                this.props.signinUser(response.data.message);
                alert('Signin successful');
            }
            else{
                alert(response.data.message);
            }
        })
        .catch(err => {
            this.clear();
            // console.log(err)
            alert('Some error occured');
        });
    }

    render(){
        return (
            <div className="portal center card teal darken-4 white-text">
                <h1><u>Sign In</u></h1>
                <br />
                <div className='credentials'>
                    <h4>Email</h4>
                    <input name='email' type='email' placeholder='Enter email here' value={this.state.email} onChange={this.updateData} autoFocus />
                    <h4>Password</h4>
                    <input name ='password' type='password' placeholder='Enter password here' value={this.state.password} onChange={this.updateData} />
                </div>
                <br />
                <div className='row'>
                        <button className='btn-large teal darken-3' onClick={this.signin}>Sign In</button>
                        <button className='btn-large cyan darken-1' onClick={this.clear}>Clear</button>
                </div>
            </div>
        )
    }
}

export default Signin;