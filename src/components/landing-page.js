import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './landing-page.css';

import LoginForm from './login-form';

export function LandingPage(props) {
    
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="landing-page text-center home">
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);