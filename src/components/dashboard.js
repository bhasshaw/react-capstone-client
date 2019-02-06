import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import magnify from '../views/magnify.png';
import calendar from '../views/calendar.png';
import check from '../views/check.png';

export class Dashboard extends React.Component {
    render() {
        return (
        <div className="position-relative px-4 my-2 text-center bg-dark">
        <div className="my-5">
            <h2 className="mb-5">Hello, {this.props.name}!</h2>
            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" src={calendar} alt="Generic placeholder" width="160" height="160"></img>
                    <h2 className="my-4">Schedule</h2>
                    <p>With DogDates you can schedule your own play date! Easily enter the park name, date, and time you will be playing
                         with your dog and let others join!</p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src={magnify} alt="Generic placeholder" width="160" height="160"></img>
                    <h2 className="my-4">Find</h2>
                    <p>You can also search for play dates! Find play dates that other dog owners have 
                        scheduled and meet up with them!</p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src={check} alt="Generic placeholder" width="160" height="160"></img>
                    <h2 className="my-4">Meet Dogs</h2>
                    <p>Whether you schedule your own play date or join others, your dog will have a great time 
                        meeting new friends!</p>
                </div>
            </div>
            <h4 className="mt-3">Use navigation bar to create and search dog dates</h4>
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