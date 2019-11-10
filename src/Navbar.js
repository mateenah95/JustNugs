import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
  constructor(props){
    super(props);

    this.getAccountControls = this.getAccountControls.bind(this);
  }

  getAccountControls(){
    if(this.props.user){
      return (
        <li><a className='btn teal darken-1' onClick={this.props.signoutUser}>Signout</a></li>
      )
    }
    else{
      return (
        <span>
          <li><Link to='/Signin' className="btn teal darken-1">Signin</Link></li>
          <li><Link to='/Signup' className="btn teal darken-1">Signup</Link></li>
        </span>
      )
    }
  }

    render(){
      return (
        <nav>
            <div className="only-border nav-wrapper teal darken-3 wrapper theme-border">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <a id="nav-header" href="#" className="brand-logo center">JustNugs</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/Account' className={this.props.user ? 'cyan' : ''}>{this.props.user ? this.props.user.email : 'GUEST'}</Link></li>
                    {this.getAccountControls()}
                    
                </ul>
            </div>
        </nav>
      )
    }
  }

  export default Navbar;