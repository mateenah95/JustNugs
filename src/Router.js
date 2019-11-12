import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Home';
import Navbar from './Navbar';
import Signin from './Signin';
import Signup from './Signup';
import Shop from './Shop';
import Account from './Account';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Error404 from './Error404';

class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Navbar user={this.props.user} signoutUser={this.props.signoutUser}/>
                <br />
                <Switch>
                    <Route path='/signin' match render={()=><Signin user={this.props.user} signinUser={this.props.signinUser}/>} />
                    <Route path='/signup' match render={()=><Signup user={this.props.user} />} />
                    <Route path='/shop' match render={()=><Shop user={this.props.user} />} />
                    <Route path='/about' match render={()=><About user={this.props.user} />} />
                    <Route path='/contact' match render={()=><Contact user={this.props.user} />} />
                    <Route path='/account' match render={()=><Account user={this.props.user} />} />
                    <Route path='/' match render={()=><Home user={this.props.user} />} />
                    <Route component={Error404} />
                </Switch>
                <br />
                <Footer />
            </BrowserRouter>
        )
    }
}

export default Router;