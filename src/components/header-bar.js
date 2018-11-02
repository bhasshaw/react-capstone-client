import React from 'react';
import AddDate from './add-date-btn';
import FindDate from './find-date-btn';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOut;
        let addDate;
        let findDate;
        if (this.props.loggedIn) {
            logOut = (
                <a href="#" className="nav-link" onClick={() => this.logOut()}>Log Out</a>
            );
            addDate = (
                <AddDate />
            );
            findDate = (
                <FindDate />
            );
        }
        return (
            <nav className="navbar navbar-dark bg-dark masthead mb-auto">
                <a className="navbar-brand" href="/dashboard">DogDates</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            {findDate}
                        </li>
                        <li className="nav-item">
                            {addDate}
                        </li>
                        <li className="About">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            {logOut}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);