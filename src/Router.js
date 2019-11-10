import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Signin from './Signin';
import Signup from './Signup';
import Footer from './Footer';
import Error404 from './Error404';

class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path='/signin' match component={Signin} />
                    <Route path='/signup' match component={Signup} />
                    <Route component={Error404} />
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default Router;