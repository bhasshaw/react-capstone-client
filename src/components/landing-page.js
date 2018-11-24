import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="text-center bg-dark my-2 login">
            <div className="mx-5 mt-4">
                <h4>Please log in</h4>
            </div>
            <LoginForm /> 
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);