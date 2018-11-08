import React from 'react';
import {connect} from 'react-redux';
import {getDates} from '../actions/protected-data';
// import {Redirect} from 'react-router-dom';

export class MyDogDatesPage extends React.Component {
    componentWillMount() {
		this.props.dispatch(getDates());
	}
    render() {
        let dates = this.props.dates.map(date =>
        <div className=""> 
            <div>{date.park}</div>
            <div>{date.date}</div>
            <div>{date.startTime} to {date.endTime}</div>
        </div>)
        return (
            <div className="text-center bg-dark my-2 p-3">
                <h3>My Results</h3>
                {dates}
            </div>
        )
    }   
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    dates: state.protectedData.dates

});

export default connect(mapStateToProps)(MyDogDatesPage);