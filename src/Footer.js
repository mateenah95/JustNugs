
import React from 'react';

const Footer = () => {
    return (
        <footer className="only-border page-footer teal darken-3 theme-border">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">JustNugs</h5>
                        <p className="grey-text text-lighten-4">support@justnugs.com</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Mail</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">7 Outer Circle Road</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">3359 Mississauga Road</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">L5L 6A2</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">647-915-4496</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright teal darken-3">
                <div className="container">
                © 2019 JustNugs Inc
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer> 
    )
}

export default Footer;