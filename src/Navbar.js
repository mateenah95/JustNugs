import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
      return (
        <nav>
            <div className="nav-wrapper teal darken-3 wrapper theme-border">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="badges.html">About</a></li>
                    <li><a href="collapsible.html">Contact</a></li>
                </ul>
                <a id="nav-header" href="#" className="brand-logo center">JustNugs</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/Account'>GUEST</Link></li>
                    <li><Link to='/Signin' className="btn teal darken-1">Signin</Link></li>
                    <li><Link to='/Signup' className="btn teal darken-1">Signup</Link></li>
                </ul>
            </div>
        </nav>
      )
    }
  }

  export default Navbar;