import React from 'react';
import AddDate from './addDate';
import FindDate from './findDate';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
// import {fetchProtectedData} from '../actions/protected-data';

export class Dashboard extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchProtectedData());
    // }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-name">Welcome, {this.props.name}!</div>
                <AddDate /> <br />
                <FindDate />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName}`
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));