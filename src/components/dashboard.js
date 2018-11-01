import React from 'react';
// import MapContainer from './google';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

export class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard position-relative overflow-hidden p-3 p-md-5 my-2 text-center bg-dark">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h2 className="display-4 font-weight-normal">Portland, OR</h2>
                    <p className="lead font-weight-normal">Finding a play date for your dog has never been easier!</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        name: `${currentUser.firstName}`,
        loggedIn: state.auth.currentUser !== null
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));