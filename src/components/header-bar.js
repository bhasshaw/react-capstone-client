import React from 'react';
import AddDate from './add-date-btn';
import FindDate from './find-date-btn';
import MyDogDates from './my-dates-btn';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    render() {
        let logOut;
        let addDate;
        let findDate;
        let myDates;
        if (this.props.loggedIn) {
            logOut = (
                <a href="./dashboard" className="nav-link" onClick={() => this.logOut()}>Log Out</a>
            );
            addDate = (
                <AddDate />
            );
            findDate = (
                <FindDate />
            );
            myDates = (
                <MyDogDates />
            );
        }
        
        return (
            <nav className="navbar navbar-dark bg-dark masthead mb-auto rounded-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/dashboard">DogDates</a>
                <div className="collapse navbar-collapse dropdown" id="navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                            {findDate}
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                            {addDate}
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                            {myDates}
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
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