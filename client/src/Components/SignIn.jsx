import React, {Component} from 'react';
import GoogleAcc from "./GoogleAcc"
class GetStarted extends Component {
    render() {
        return (
            <GoogleAcc menubutton="Sign In"
                       dialogtitle="Welcome Back"
                       action="Sign In"
                       subtitle="No Account ?"
                       subtitlespan="Create one."/>
        );
    }
}

export default GetStarted;