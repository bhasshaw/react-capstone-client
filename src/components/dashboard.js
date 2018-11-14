import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import magnify from '../views/magnify.png';
import calendar from '../views/calendar.png';
import check from '../views/check.png';

export class Dashboard extends React.Component {
    render() {
        return (
        <div className="dashboard position-relative overflow-hidden p-4 p-md-5 my-2 text-center bg-dark h-100">
            <h3 className="mb-3">Hello, {this.props.name}!</h3>
            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" src={calendar} alt="Generic placeholder" width="140" height="140"></img>
                    <h2 className="pt-3">Schedule</h2>
                    <p>With DogDates you can schedule your own play date! Easily enter the date, time, and address you will be playing with your dog and let other dogs join while you're there!</p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src={magnify} alt="Generic placeholder" width="140" height="140"></img>
                    <h2 className="pt-3">Find</h2>
                    <p>You can also search for play dates in your area! Find play dates other dog owners have scheduled and meet up with them!</p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src={check} alt="Generic placeholder" width="140" height="140"></img>
                    <h2 className="pt-3">Meet Dogs</h2>
                    <p>Whether you schedule your own play date or join others, your dog will have a great time meeting new friends!</p>
                </div>
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