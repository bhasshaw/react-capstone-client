import React from 'react';
import MapContainer from './google';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

export class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                {/* <div className="dashboard-name">Welcome, {this.props.name}!</div> */}
                <MapContainer />
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