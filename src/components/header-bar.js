import React from 'react';
import AddDate from './addDate';
import FindDate from './findDate';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOutButton;
        let addDate;
        let findDate;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="btn-dark" onClick={() => this.logOut()}>Log out</button>
            );
            addDate = (
                <AddDate />
            );
            findDate = (
                <FindDate />
            );
        }
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
                <a className="navbar-brand" href="#">DogDates</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {findDate}
                    </li>
                    <li className="nav-item">
                        {addDate}
                    </li>
                    <li className="nav-item">
                        {logOutButton}
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);