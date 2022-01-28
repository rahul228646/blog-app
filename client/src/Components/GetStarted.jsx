import React, {Component} from 'react';
import GoogleAcc from "./GoogleAcc"
class GetStarted extends Component {
    render() {
        return (
            <GoogleAcc menubutton="Get Started"
                       dialogtitle="Join Medium"
                       action="Sign Up"
                       subtitle="Already have an account ?"
                       subtitlespan="SignIn."/>
        );
    }
}

export default GetStarted;